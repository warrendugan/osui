import { Component } from '@angular/core';
import { StyleService } from '@osuidev/ui';

@Component({
  selector: 'osui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private style: StyleService) {
    // this.style.getAllProperties();
  }
}
