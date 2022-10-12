import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
fileUploadUrl ="http://localhost:8080/employee/upload";
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

  file:any;
  flag=true;

selectFile(event){
  //console.log(event);
  this.file=event.target.files[0];
  console.log(this.file);

}
message:any;
uploadFile(){
  let formData= new FormData()
  formData.append("file", this.file);
  this.flag= false;
  this._http.post(this.fileUploadUrl, formData).subscribe((data:any) => {
    console.log(data);
    this.flag= true;
alert(data.message);
  },
  (error)=>{
    console.log(error);
    this.flag= true;
    alert('Error : Please Upload file in XLSX format')
  })}
  


}
