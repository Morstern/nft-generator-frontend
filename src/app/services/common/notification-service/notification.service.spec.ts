import { TestBed } from '@angular/core/testing';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationComponent } from '@common/components/notification/notification.component';
import { Notification, NotificationType } from '@common/tos/notitifcation';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  const NOTIFICATION_POSITION = {
    horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  const MOCK_NOTIFICATION_WITH_HEADER: Notification = {
    message: 'Test message',
    header: 'Test Header',
  };

  class MOCK_MAT_SNACK_BAR {
    openFromComponent(): void {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useClass: MOCK_MAT_SNACK_BAR,
        },
      ],
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call success method with parameters', () => {
    const spyOpen = spyOn(service['_snackBar'], 'openFromComponent');

    service.success(MOCK_NOTIFICATION_WITH_HEADER);

    expect(spyOpen).toHaveBeenCalledWith(NotificationComponent, {
      ...NOTIFICATION_POSITION,
      duration: 3000,
      data: {
        notification: {
          ...MOCK_NOTIFICATION_WITH_HEADER,
          notificationType: NotificationType.SUCCESS,
        },
      },
      panelClass: ['notification--success'],
    });
  });

  it('should call error method with parameters', () => {
    const spyOpen = spyOn(service['_snackBar'], 'openFromComponent');

    service.error(MOCK_NOTIFICATION_WITH_HEADER);

    expect(spyOpen).toHaveBeenCalledWith(NotificationComponent, {
      ...NOTIFICATION_POSITION,
      data: {
        notification: {
          ...MOCK_NOTIFICATION_WITH_HEADER,
          notificationType: NotificationType.ERROR,
        },
      },
      panelClass: ['notification--error'],
    });
  });

  it('should call info method with parameters', () => {
    const spyOpen = spyOn(service['_snackBar'], 'openFromComponent');

    service.info(MOCK_NOTIFICATION_WITH_HEADER);

    expect(spyOpen).toHaveBeenCalledWith(NotificationComponent, {
      ...NOTIFICATION_POSITION,
      data: {
        notification: {
          ...MOCK_NOTIFICATION_WITH_HEADER,
          notificationType: NotificationType.INFO,
        },
      },
      panelClass: ['notification--info'],
    });
  });

  it('should call warning method with parameters', () => {
    const spyOpen = spyOn(service['_snackBar'], 'openFromComponent');

    service.warning(MOCK_NOTIFICATION_WITH_HEADER);

    expect(spyOpen).toHaveBeenCalledWith(NotificationComponent, {
      ...NOTIFICATION_POSITION,
      data: {
        notification: {
          ...MOCK_NOTIFICATION_WITH_HEADER,
          notificationType: NotificationType.WARNING,
        },
      },
      panelClass: ['notification--warning'],
    });
  });
});
