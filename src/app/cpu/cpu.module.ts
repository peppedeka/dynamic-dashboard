import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpuCmp } from './cpu.component';
import { IsCpuPipe } from './is-cpu.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CpuCmp, IsCpuPipe],
  imports: [CommonModule, MatCardModule, MatListModule],
  exports: [CpuCmp],
})
export class CpuModule {}
