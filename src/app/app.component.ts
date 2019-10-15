import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>     </app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-one-o-one';

  counter = 1;
  ngOnInit() {
    setInterval(() => (this.counter = this.counter + 1));
  }
}
