import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { DeleteDialog } from './delete.dialog';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    DeleteDialog,
  ],
  exports: [
    DeleteDialog,
  ],
  entryComponents: [
    DeleteDialog,
  ],
})
export class DeleteDialogModule {
}
