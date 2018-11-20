import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageSelected = new EventEmitter<string>();
  pageSelectedName: string;

  constructor() { }

  ngOnInit() {
    this.onSelectPage('recipe');
  }

  onSelectPage(pageName: string) {
    this.pageSelectedName = pageName;
    this.pageSelected.emit(pageName);
  }

}
