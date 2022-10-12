import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginData={
    username:'',
    password:'',
    jwtToken:'',
    valid:'',
  };
  error:any;
constructor(private Auth:EmployeeService) { }




ngOnInit():void  {
  this.error=false
}


formSubmit(){
  console.log(this.loginData)

  
   // request to serve generrate token 
this.Auth.generateToken(this.loginData).subscribe(
(data:any)=>{
  console.log('success');
  console.log(data);
  
  this.loginData.jwtToken=data.jwtToken
  this.loginData.valid=data.valid
  
// login 
this.Auth.loginUser(data.jwtToken)


this.Auth.Validite().subscribe((Token:any)=>{
console.log('validated')
})
this.Auth.setUser(this.loginData)
window.location.href=`/home`

},
error=>{
  this.error=true
  //localStorage.setItem(`error`, JSON.stringify(error.message)
  console.log('Error !!');
  console.log(error);

})


}

}

