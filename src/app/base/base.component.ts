import { Directive, Input } from '@angular/core';
import { Component } from '../model';

@Directive()
export abstract class BaseCmp {
  private _cmp: Component | undefined;
  get cmp(): Component | undefined {
    return this._cmp;
  }
  @Input()
  set cmp(value: Component | undefined) {
    this._cmp = value;
  }
  constructor() {}
}
