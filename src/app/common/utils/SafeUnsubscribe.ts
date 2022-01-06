import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export class SafeUnsubscribe implements OnDestroy {
  protected _ngUnsubscribe: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
