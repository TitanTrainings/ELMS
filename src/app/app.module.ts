import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from './modules/employee.module';
import { ManagerModule } from './modules/manager.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { routes } from './app.routes';
import { LeaveService } from './services/leave.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MainComponent, LoginComponent],
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        EmployeeModule,

        ManagerModule, RouterModule.forRoot(routes)
    ],
    providers: [HttpClient,LeaveService],
    bootstrap: [MainComponent],
})
export class AppModule { }