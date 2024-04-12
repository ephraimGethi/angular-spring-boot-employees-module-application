import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrl: './update-employees.component.css'
})
export class UpdateEmployeesComponent implements OnInit{
   id?:number;
  employee:Employee = new Employee();
  constructor(private service:EmployeeService,
    private route:ActivatedRoute,
    private routerNav:Router,
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  this.service.getAllEmployeeById(this.id).subscribe(data=>
    {
      this.employee = data; 
    }
  );
  }

  onSubmit() {
this.service.updateEmployee(this.employee,this.id).subscribe(data=>{
this.routerNav.navigate(["/employees"])
})
}

}
