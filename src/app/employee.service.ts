import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private BaseUrl = 'http://localhost:8080/api/v1/employees';
  constructor(
    private httpClient:HttpClient,
  ) {  }
getAllEmployees():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.BaseUrl}`);
}
createNewEmployee(employee:Employee):Observable<Employee>{
  return this.httpClient.post<Employee>(this.BaseUrl,employee)
}
getAllEmployeeById(id?:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.BaseUrl}/${id}`);
}
updateEmployee(employee:Employee,id?:number):Observable<object>{
  return this.httpClient.put<Employee>(`${this.BaseUrl}/${id}`,employee)
}
deleteEmployee(id?:number):Observable<Object>{
return this.httpClient.delete(`${this.BaseUrl}/${id}`)
}
}
