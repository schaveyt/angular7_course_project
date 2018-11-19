import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageSelected: string;
  onPageSelected(pageName: string) {
    this.pageSelected = pageName;
  }
}
