import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
employeeDetails(id?:number) {
this.router.navigate(["employee-details",id]);
}
deleteEmployees(id?:number) {
this.employeeService.deleteEmployee(id).subscribe(
  data=>{
    this.getEmployees();
  }
)
}

updateEmployees(id?:number) {
this.router.navigate(["update-employees",id])
}

employees?:Employee[];

constructor(
  private employeeService:EmployeeService,
  private router:Router,
){

}
ngOnInit(): void {
this.getEmployees();
}
private getEmployees(){
  this.employeeService.getAllEmployees().subscribe(data=>{
    this.employees = data});
}
}
