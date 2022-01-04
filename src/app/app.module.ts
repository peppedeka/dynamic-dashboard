import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpuModule } from './cpu/cpu.module';
import { NewsModule } from './news/news.module';
import { TrendsModule } from './trends/trends.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingDirective } from './shared/loading.directive';

@NgModule({
  declarations: [AppComponent, LoadingDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CpuModule,
    NewsModule,
    TrendsModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
