import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent {

  constructor(){
    AuthService: AuthService
  }





  num: number= 5;

  addnum(){
    this.num++
  }
  subnum(){
    this.num--;
  }
  // activeOption: number = 1;

  // setActiveOption(option: number): void {
  //   this.activeOption = option;
  // }

  // getEnvelopeIconHtml(): string {
  //   return '<i class="fa-regular fa-envelope"></i>';
  // }

}
