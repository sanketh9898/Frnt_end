import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EsaFgComponent } from './esa-fg/esa-fg.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { NetAllowanceComponent } from './net-allowance/net-allowance.component';
import { SkillsComponent } from './skills/skills.component';
import { TransformationComponent } from './transformation/transformation.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { VeiwAssignmentComponent } from './veiw-assignment/veiw-assignment.component';
import { VeiwEmployeeComponent } from './veiw-employee/veiw-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent, canActivate:[AuthGuard]},
  {path: 'transformation', component: TransformationComponent, canActivate:[AuthGuard]},
  {path: 'leave-forecast', component: LeaveComponent,canActivate:[AuthGuard] },
  {path: 'esa-fg', component: EsaFgComponent,canActivate:[AuthGuard] },
  {path: 'veiw-employees', component: VeiwEmployeeComponent,canActivate:[AuthGuard] },
  {path: 'asset-details', component: AssetDetailsComponent,canActivate:[AuthGuard] },
  {path: 'veiw-assignment', component: VeiwAssignmentComponent,canActivate:[AuthGuard] },
  {path: 'Skills', component: SkillsComponent,canActivate:[AuthGuard] },
  {path: 'admin-login', component: AdminLoginComponent,canActivate:[AuthGuard] },
  {path: 'net-allowance', component: NetAllowanceComponent,canActivate:[AuthGuard] },
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  {path: 'user-login', component: UserLoginComponent },
  {path:'', redirectTo:'user-login', pathMatch:'full'},
  {path: 'create-employee', component: CreateEmployeeComponent,canActivate:[AuthGuard] },
  {path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[AuthGuard] },
  {path: 'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGuard] },
  {path: 'upload-file', component: FileUploadComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
