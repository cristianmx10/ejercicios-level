import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  email: string;
  km: number;

  correct: boolean;

  sendForm() {
    this.correct = (this.km > 4) ? true : false;
  }

  cleanForm() {
    this.name = '';
    this.email = '';
    this.km = 0;
  }
}
