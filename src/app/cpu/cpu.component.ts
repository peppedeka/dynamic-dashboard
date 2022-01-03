import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseCmp } from '../base/base.component';

@Component({
  selector: 'cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CpuCmp extends BaseCmp {}
