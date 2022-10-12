import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  private baseURL = "http://localhost:8080/api/v1/employees"

  constructor(private httpClient: HttpClient) { }
  updateEmployee(empId: number, employee:Employee):Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${empId}`, employee);
  }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`);
  }

  deleteEmployee(empId: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${empId}`);
  }


  //login


  private baseUrl = "http://localhost:8084";

  public Validite(){
    let token=localStorage.getItem(`jwtToken`)
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token!=null?token:'',
      }),};
      return this.httpClient.get(`${this.baseUrl}/validate`,httpOptions);
    
  };
  // logout : remove token from local storage 
public logout(){
  localStorage.removeItem(`jwtToken`);
  localStorage.removeItem(`user`);
  location.href="/user-login";

}

  public generateToken(loginData){

    return this.httpClient.post(`${this.baseUrl}/login`,loginData);
    
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Internal Server Error")
  }

  public setUser(User){
    localStorage.setItem(`User`,JSON.stringify(User));
  }
  public isLoggedIn(){
    return !!localStorage.getItem(`jwtToken`)
    
  }
public loginUser(token){
  localStorage.setItem(`jwtToken`, token);
  
  return true;
}
  
}
