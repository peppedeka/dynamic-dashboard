import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  template: `
  <h1 mat-dialog-title>Hi</h1>
    <div mat-dialog-content>
      <p>Are you sure?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick('yes')">yes</button>
      <button mat-button (click)="onNoClick('no')" cdkFocusInitial>no</button>
    </div>
  `,
})
export class DeleteDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
  ) {}

  onNoClick(value:'yes'|'no'): void {
    this.dialogRef.close(value);
  }
}
