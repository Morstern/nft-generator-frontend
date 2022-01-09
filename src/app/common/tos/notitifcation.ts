export enum NotificationType {
  ERROR,
  INFO,
  SUCCESS,
  WARNING,
}

export interface Notification {
  message: string;
  notificationType?: NotificationType;
  header?: string;
  duration?: number;
}
