import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsCmp } from './trends.component';
import { IsTrendsPipe } from './is-trends.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [TrendsCmp, IsTrendsPipe],
  imports: [CommonModule, MatCardModule, MatListModule],
  exports: [TrendsCmp],
})
export class TrendsModule {}
