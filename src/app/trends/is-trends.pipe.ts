import { Pipe, PipeTransform } from '@angular/core';
import { Component, Trend } from '../model';

@Pipe({
  name: 'isTrendsCmp',
})
export class IsTrendsPipe implements PipeTransform {
  transform(value: Component | undefined): Trend {
    return value as Trend;
  }
}
