export enum NotificationType {
  ERROR,
  INFO,
  SUCCESS,
  WARNING,
}

export interface Notification {
  message: string | Array<string>;
  notificationType?: NotificationType;
  header?: string;
  duration?: number;
}
