import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCmp } from './news.component';
import { IsNewsPipe } from './is-news.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NewsCmp, IsNewsPipe],
  imports: [CommonModule, MatCardModule, MatListModule],
  exports: [NewsCmp],
})
export class NewsModule {}
