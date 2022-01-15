import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { ConvertMessageToMessagesPipe } from '@common/pipe/convert-message-to-messages.pipe';
import { Notification, NotificationType } from '@common/tos/notitifcation';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  const ERROR_ICON_MESSAGE = 'error';
  const SUCCESS_ICON_MESSAGE = 'check_circle';
  const WARNING_ICON_MESSAGE = 'warning';
  const INFO_ICON_MESSAGE = 'info';

  const DEFAULT_ERROR_HEADER = 'Error';

  const MOCK_NOTIFICATION: Notification = {
    message: 'Test message',
    duration: 3000,
    header: 'Test Header',
    notificationType: NotificationType.ERROR,
  };

  const MOCK_MAT_SNACK_BAR_DATA: any = {
    notification: MOCK_NOTIFICATION,
  };

  class MOCK_MAT_SNACK_BAR_REF {
    dismiss(): void {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent, ConvertMessageToMessagesPipe],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: MOCK_MAT_SNACK_BAR_DATA },
        { provide: MatSnackBarRef, useClass: MOCK_MAT_SNACK_BAR_REF },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
  });

  it('should create error notification', () => {
    fixture.detectChanges();

    const nameOfIcon = fixture.debugElement.nativeElement
      .querySelector('.notification__icon')
      .textContent.trim();

    expect(nameOfIcon).toEqual(ERROR_ICON_MESSAGE);
  });

  it('should create success notification', () => {
    fixture.detectChanges();

    component.notification = {
      ...component.notification,
      notificationType: NotificationType.SUCCESS,
    };

    fixture.detectChanges();

    const nameOfIcon = fixture.debugElement.nativeElement
      .querySelector('.notification__icon')
      .textContent.trim();

    expect(nameOfIcon).toEqual(SUCCESS_ICON_MESSAGE);
  });

  it('should create warning notification', () => {
    fixture.detectChanges();

    component.notification = {
      ...component.notification,
      notificationType: NotificationType.WARNING,
    };

    fixture.detectChanges();

    const nameOfIcon = fixture.debugElement.nativeElement
      .querySelector('.notification__icon')
      .textContent.trim();

    expect(nameOfIcon).toEqual(WARNING_ICON_MESSAGE);
  });

  it('should create info notification', () => {
    fixture.detectChanges();

    component.notification = {
      ...component.notification,
      notificationType: NotificationType.INFO,
    };

    fixture.detectChanges();

    const nameOfIcon = fixture.debugElement.nativeElement
      .querySelector('.notification__icon')
      .textContent.trim();

    expect(nameOfIcon).toEqual(INFO_ICON_MESSAGE);
  });

  it('should create error notification with default header', () => {
    fixture.detectChanges();

    component.notification = {
      ...component.notification,
      header: undefined,
    };

    fixture.detectChanges();

    const textOfDefaultHeader = fixture.debugElement.nativeElement
      .querySelector('.notification__header')
      .textContent.trim();

    expect(textOfDefaultHeader).toEqual(DEFAULT_ERROR_HEADER);
  });

  it('should call dismiss on close click', () => {
    const spyOnDismiss = spyOn(component['_snackRef'], 'dismiss');
    fixture.detectChanges();

    const closeButton = fixture.debugElement.nativeElement.querySelector(
      '.notification__close-icon'
    );

    closeButton.click();

    expect(spyOnDismiss).toHaveBeenCalled();
  });
});
