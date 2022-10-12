import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Auth: EmployeeService, private router: Router){}
  canActivate(){

    if(this.Auth.isLoggedIn()){
      return true;
    }
this.router.navigate(['/user-login']);
return false ;
    

  }
   
    
  
}
