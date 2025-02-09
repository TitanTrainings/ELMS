import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveApplyComponent } from '../components/leave-apply/leave-apply.component';
import { LeaveBalanceComponent } from '../components/leave-balance/leave-balance.component';


@NgModule({
    declarations: [LeaveApplyComponent,LeaveBalanceComponent],
    imports: [CommonModule],
    exports: [LeaveApplyComponent,LeaveBalanceComponent] // Export the component to make it usable outside
  })
  export class EmployeeModule {}