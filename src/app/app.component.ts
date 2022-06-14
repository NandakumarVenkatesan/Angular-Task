import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nanda';
  value: string='Nanda';
  showHide: boolean = false;


  onShowHide() {
    this.showHide = !this.showHide;
}

}
