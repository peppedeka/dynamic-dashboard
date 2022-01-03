import { Pipe, PipeTransform } from '@angular/core';
import { Component, News } from '../model';

@Pipe({
  name: 'isNewsCmp',
})
export class IsNewsPipe implements PipeTransform {
  transform(value: Component | undefined): News {
    return value as News;
  }
}
