import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { DataService } from './data.service';
import { Board } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  loadingList:boolean[] = [];

  readonly $board: Observable<Board>;

  private _$boardLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _deleteEVT: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _dataService: DataService) {
    this.$board =
    combineLatest([this._dataService.boards(1) as Observable<Board>,this._deleteEVT.pipe(startWith(-1))]).pipe(
      map(([b,idx])=> {
        if(b.components[idx] != null) {
          b.components.splice(idx,1)
        }
        return b;
      }),
      tap(b => {
        const loadingList: boolean[] = [];
        b.components.forEach(_ =>loadingList.push(false));
        this.loadingList = loadingList;
        this._$boardLength.next(b.components.length);
      })
      );
  }

  delete(idx:number):void {
    this._deleteEVT.emit(idx)
  }

  randomLoading() {
    const componentCount = this._$boardLength.value;
    const randomIdx = Math.floor(Math.random() * componentCount);
    if(this.loadingList[randomIdx]!= null) {
      this.loadingList[randomIdx] = !this.loadingList[randomIdx];
    }
  }
}
