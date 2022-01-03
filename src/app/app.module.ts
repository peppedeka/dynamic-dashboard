import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CpuModule } from './cpu/cpu.module';
import { NewsModule } from './news/news.module';
import { TrendsModule } from './trends/trends.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CpuModule,
    NewsModule,
    TrendsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
