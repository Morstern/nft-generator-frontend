import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationComponent } from '@common/components/notification/notification.component';
import { Notification, NotificationType } from '@common/tos/notitifcation';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private DEFAULT_MESSAGE_DURATION: number = 3000;

  private NOTIFICATION_POSITION = {
    horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(private _snackBar: MatSnackBar) {}

  error(notification: Notification): void {
    this._snackBar.openFromComponent(NotificationComponent, {
      ...this.NOTIFICATION_POSITION,
      data: {
        notification: {
          ...notification,
          notificationType: NotificationType.ERROR,
        } as Notification,
      },
      panelClass: ['notification--error'],
    });
  }

  success(notification: Notification): void {
    this._snackBar.openFromComponent(NotificationComponent, {
      ...this.NOTIFICATION_POSITION,
      duration: this.DEFAULT_MESSAGE_DURATION,
      data: {
        notification: {
          ...notification,
          notificationType: NotificationType.SUCCESS,
        } as Notification,
      },
      panelClass: ['notification--success'],
    });
  }

  warning(notification: Notification): void {
    this._snackBar.openFromComponent(NotificationComponent, {
      ...this.NOTIFICATION_POSITION,
      data: {
        notification: {
          ...notification,
          notificationType: NotificationType.WARNING,
        } as Notification,
      },
      panelClass: ['notification--warning'],
    });
  }

  info(notification: Notification): void {
    this._snackBar.openFromComponent(NotificationComponent, {
      ...this.NOTIFICATION_POSITION,
      data: {
        notification: {
          ...notification,
          notificationType: NotificationType.INFO,
        } as Notification,
      },
      panelClass: ['notification--info'],
    });
  }
}
