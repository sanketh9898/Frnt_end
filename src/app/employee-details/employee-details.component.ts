import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
empId: number
employee: Employee
  constructor(private route: ActivatedRoute, private router: Router,private employeeService: EmployeeService) { }

  ngOnInit() {
    this.empId = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.empId).subscribe( data =>{
    this.employee = data;
    })

  }
  updateEmployee(empId: number){
    this.router.navigate(['update-employee', empId]);

  }

}
