import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Banner2Component } from '../../Compo/banner2/banner2.component';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterModule,RouterOutlet,Banner2Component],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{

 private http;
 public bookList:any = {};
 public selectedBook:  any;

 constructor(private httpClient:HttpClient)
 {this.http=httpClient;}
 
 ngOnInit(): void {
  this.loadBooks();
}

 loadBooks(){
  this.http.get('http://localhost:8080/book/get').subscribe((data) =>{
  this.bookList=data;
  console.log(this.bookList);
  });
 }

 deleteBook(){
  let api = "http://localhost:8080/book/"+this.selectedBook.id;
  this.http.delete(api,{responseType:'text'}).subscribe((response:string) =>{
    console.log(response);
    this.loadBooks();
    Swal.fire({
      title: "Deleted!",
      text: `${this.selectedBook.title} Book is deleted`,
      icon: "success"
    });
    this.selectedBook=null;
    });
 }

 setSelectedBook(book:any){
  this.selectedBook=book;
  console.log("setSelectedBook"+book.id);
 }

 saveBook() {
  let postApi = "http://localhost:8080/book/add";
  this.http.post(postApi, this.selectedBook).subscribe(data => {
    console.log("saved!");
    this.loadBooks();
    Swal.fire({
      title: "updated!",
      text: `${this.selectedBook.title} Book is updated`,
      icon: "success"
    });
    this.selectedBook = [];
  })
}
}
