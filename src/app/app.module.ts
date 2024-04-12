import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeesComponent,
    EmployeeDetailsComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    // provideClientHydration(),
    HttpClient,
    EmployeeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
