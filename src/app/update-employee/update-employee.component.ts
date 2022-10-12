import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeSerivce: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  empId: number;

  ngOnInit(): void {
    this.empId = this.route.snapshot.params["id"];

    this.employeeSerivce.getEmployeeById(this.empId).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }
  gotoList() {
    this.router.navigate(["/employees"]);
  }

  updateEmployee() {
    this.employeeSerivce.updateEmployee(this.empId, this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.employeeSerivce.updateEmployee(this.empId, this.employee).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
}