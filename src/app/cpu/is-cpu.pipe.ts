import { Pipe, PipeTransform } from '@angular/core';
import { Component, CPU } from '../model';

@Pipe({
  name: 'isCpuCmp',
})
export class IsCpuPipe implements PipeTransform {
  transform(value: Component | undefined): CPU {
    return value as CPU;
  }
}
