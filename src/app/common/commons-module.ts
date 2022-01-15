import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { NotificationComponent } from './components/notification/notification.component';
import { ConvertMessageModule } from './pipe/convert-message-to-messages.pipe';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    DragDropModule,
    MatTabsModule,
    MatSnackBarModule,
    ConvertMessageModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatExpansionModule,
    DragDropModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
})
export class CommonsModule {}
