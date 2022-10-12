import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-veiw-assignment',
  templateUrl: './veiw-assignment.component.html',
  styleUrls: ['./veiw-assignment.component.css']
})
export class VeiwAssignmentComponent implements OnInit {

 
  employees: Employee[];
  constructor(private employeeService: EmployeeService , private router: Router , httpClient: HttpClient) { }

  ngOnInit(): void {
    
     this.getEmployees();
     
    
  }
empId:number;
employee:any;
public findUserByEmp(empId: number){
  this.employeeService.getEmployeeById(empId).subscribe(data =>{
    this.employee = data;
    this.router.navigate(['employee-details', empId]);
    console.log(data);
  },(error) => console.log(error));
}
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  updateEmployee(empId: number){
    this.router.navigate(['update-employee', empId]);

  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })

  }
  employeeDetails(empId: number){
    this.router.navigate(['employee-details', empId]);

  }
  fileName = 'ExcelSheet.xlsx';
exportexcel(): void{
let element = document.getElementById('excel-table');
const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

XLSX.writeFile(wb, this.fileName);

  }

}
