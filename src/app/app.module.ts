import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { NetAllowanceComponent } from './net-allowance/net-allowance.component';
import { SkillsComponent } from './skills/skills.component';
import { VeiwEmployeeComponent } from './veiw-employee/veiw-employee.component';
import { VeiwAssignmentComponent } from './veiw-assignment/veiw-assignment.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { EsaFgComponent } from './esa-fg/esa-fg.component';
import { LeaveComponent } from './leave/leave.component';

import { UpdateNetComponent } from './update-net/update-net.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TransformationComponent } from './transformation/transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    AdminLoginComponent,
    FileUploadComponent,
    HomeComponent,
    NetAllowanceComponent,
    SkillsComponent,
    VeiwEmployeeComponent,
    VeiwAssignmentComponent,
    AssetDetailsComponent,
    EsaFgComponent,
    LeaveComponent,
    
    UpdateNetComponent,
    UserLoginComponent,
    TransformationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
