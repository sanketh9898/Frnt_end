import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private _http: HttpClient, private router:Router) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']

    })
  }

  logIn(){
    this._http.get<any>("http://localhost:5555/login").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        //alert("Logged in Successfull");
        this.loginForm.reset();
        this.router.navigateByUrl('/employees');
      }else{
        alert(" Invalid Creidentials!! ")
      }
      
    })
    
  }

}
