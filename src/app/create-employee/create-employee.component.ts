import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee:Employee = {};
  constructor(private service:EmployeeService,
private router:Router,
  ){
  }
  saveEmployee(){
    this.service.createNewEmployee(this.employee).subscribe(
      Data=>{
        console.log();
      this.router.navigate(['/employees'])}
    )
  }
  onSubmit() {
    this.saveEmployee();
    }

}
