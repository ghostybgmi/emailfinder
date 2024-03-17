import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rough',
  templateUrl: './rough.component.html',
  styleUrls: ['./rough.component.css']
})
export class RoughComponent {

  ngOnInit(): void {
    // this.fetchData();
  }

  constructor(private http: HttpClient) { }

  test: any="scissor";
  arr1: any=["rock","paper","scissor"];

  names: any=["rock","paper","scissor"];

  randomName: any;
  result: any;
  rps(rps:string){
    debugger

    const randomIndex = Math.floor(Math.random() * this.names.length);
    this.test = this.names[randomIndex];
    console.log(this.test)
    if(rps=="rock"){
      if(this.test=="rock"){
        this.result="DRAW"
        console.log("DRAW")
      }
      else if(this.test=="paper"){
        this.result="U LOST"
        console.log("DRAW")
      }
      else{
        this.result="U WON"
        console.log("U WON")
      }
    }
    else if(rps=="paper"){

      if(this.test=="rock"){
        this.result="U WON"
        console.log("U WON")
      }
      else if(this.test=="paper"){
        this.result="DRAW"
        console.log("DRAW")
      }
      else{
        this.result="U LOST"
        console.log("U LOST")
      }
    }
    else{
      if(this.test=="rock"){
        this.result="U LOST"
        console.log("U LOST")
      }
      else if(this.test=="paper"){
        this.result="WON"
        console.log("WON")
      }
      else{
        this.result="U DRAW"
        console.log("U DRAW")
      }
    }
  }

  fetchData() {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (data: any) => {
        console.log(data); // Handle the data as needed

        this.test = data[2].title;
        console.log("Testing Data",this.test)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
