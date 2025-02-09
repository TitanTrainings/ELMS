import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { LeaveApprovalComponent } from '../components/leave-approval/leave-approval.component';
import { LeaveHistoryComponent } from '../components/leave-history/leave-history.component';


@NgModule({
    declarations: [LeaveApprovalComponent,LeaveHistoryComponent],
    imports: [CommonModule],
    exports: [LeaveApprovalComponent,LeaveHistoryComponent] // Export the component to make it usable outside
  })
  export class ManagerModule {}