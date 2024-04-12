import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:"employees",
  component:EmployeeListComponent,
  },
  {path:"",
  redirectTo:"employees",
  pathMatch:"full",
  },
  {path:"create-employee",
  component:CreateEmployeeComponent,
  },
  {path:"update-employees/:id",
  component:UpdateEmployeesComponent,
  },
  {path:"employee-details/:id",
  component:EmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
