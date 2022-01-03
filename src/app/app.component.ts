import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
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
  title = 'dynamic-dashboard';
  readonly $board: Observable<Board>;
  constructor(private _dataService: DataService) {
    this.$board = this._dataService.boards(1) as Observable<Board>;
  }
}
