import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LeaveApprovalComponent } from './components/leave-approval/leave-approval.component';
import { LeaveApplyComponent } from './components/leave-apply/leave-apply.component';
import { LeaveBalanceComponent } from './components/leave-balance/leave-balance.component';
import { LeaveHistoryComponent } from './components/leave-history/leave-history.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'leave-apply', component: LeaveApplyComponent },
    { path: 'leave-approval', component: LeaveApprovalComponent }, 
    { path: 'leave-balance', component: LeaveBalanceComponent },
    { path: 'leave-history', component: LeaveHistoryComponent },
    { path: '**', component: LoginComponent} 
];
