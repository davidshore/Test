import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hej';
  isDisabled = false;
  num = 0;
  value = '';
  name = '';

  add(): void {
    this.num++;
  }

  onSave(): void {
    alert('Saved!');
  }



  handleInput(event): void {
    this.value = event.target.value;
  }

}
