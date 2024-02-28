import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  private http;
  public countryList :any;
  public selectedCountry:any;

  public borrower={
    contact:null,
    userName:null,
    name:null,
    nic:null,
    email:null,
    address:null,
    password:null,
    country:null
  }

  constructor(private httpClient :HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loadCounries();
  }
  loadCounries() {
    let api="https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe((res)=>{
      this.countryList=res;
      console.log(res);
    });
  }
  setSelectedCountry(country :any){
    
    this.selectedCountry=country;
    console.log( this.selectedCountry);
  }
  createBorrower(){
    this.borrower.country=this.selectedCountry;
    this.http.post("http://localhost:8081/borrower/add",this.borrower)
      .subscribe(data=>{
        console.log(data);
        Swal.fire({
          title: "Saved!",
          text: `${this.borrower.name} book is updated`,
          icon: "success"
        });
        this.setFieldsAsNull();
      });
  }
  setFieldsAsNull(){
    this.borrower.address=null;
    this.borrower.name=null;
    this.borrower.userName=null;
    this.borrower.contact=null;
    this.borrower.email=null;
    this.borrower.nic=null;
    this.borrower.password=null;
    this.borrower.country=null;
  }
}