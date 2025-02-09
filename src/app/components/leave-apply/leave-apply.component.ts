import { Component, OnInit } from '@angular/core';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-apply',  
  templateUrl: './leave-apply.component.html',
  styleUrl: './leave-apply.component.css'
})
export class LeaveApplyComponent implements OnInit {

  _leave: Leave = new Leave();
  constructor(private employeeService: LeaveService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLeave(){
    this.employeeService.addLeave(this._leave).subscribe( data =>{
      console.log(data);
      this.goToLeaveList();
    },
    error => console.log(error));
  }

  goToLeaveList(){
    this.router.navigate(['/leave-history']);
  }
  
  onSubmit(){
    console.log(this._leave);
    this.saveLeave();
  }

}
