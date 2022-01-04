import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Component } from '../model';
import { DeleteDialog } from './delete-dialog/delete.dialog';

@Directive()
export abstract class BaseCmp implements OnDestroy {
  @Output()
  deleteEvt: EventEmitter<number> = new EventEmitter<number>();

  private _cmp: Component | undefined;
  private dialogRefSuv : Subscription = Subscription.EMPTY;

  constructor(public dialog: MatDialog) {}

  get cmp(): Component | undefined {
    return this._cmp;
  }

  @Input()
  set cmp(value: Component | undefined) {
    this._cmp = value;
  }

  delete():void {
    const dialogRef = this.dialog.open(DeleteDialog);
    const s = dialogRef.afterClosed().subscribe((result:'yes'|'no') => {
      if(result === 'yes') {
        this.deleteEvt.emit();
      }
    });
  }

  ngOnDestroy(): void {
    this.dialogRefSuv.unsubscribe();
  }
}
