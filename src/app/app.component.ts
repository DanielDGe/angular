import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp2';
  dataToChildFromParent = 'Este mensaje es para Form-first Component desde App Component'
  
  message = ''

}
