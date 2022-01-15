import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Notification, NotificationType } from '@common/tos/notitifcation';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  notificationType = NotificationType;
  notification: Notification;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private _snackRef: MatSnackBarRef<NotificationComponent>
  ) {}

  ngOnInit(): void {
    this.notification = this.data.notification;
  }

  closeNotification(): void {
    this._snackRef.dismiss();
  }

  get header(): string {
    var defaultHeaders = {
      [this.notificationType.ERROR]: 'Error',
      [this.notificationType.SUCCESS]: 'Success',
      [this.notificationType.WARNING]: 'Warning',
      [this.notificationType.INFO]: 'Info',
    };
    return this.notification.header === undefined
      ? defaultHeaders[this.notification.notificationType as NotificationType]
      : this.notification.header;
  }
}
