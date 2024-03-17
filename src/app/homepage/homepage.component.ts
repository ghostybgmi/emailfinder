import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  isShow: boolean = true;

  updateIsShow(event: MatTabChangeEvent) {
    // You can use event.index or event.tab.textLabel to identify the selected tab
    // For example, if the "Email verifier" tab has index 1:
    if (event.index === 1) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
}
