import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
// import { class } from './name of ts file'
@Component({
  // selector can have any name but must have dash in it
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("/home","HOME", true,"The Home Page"),
    new Menu("/resume","RESUME", true,"The Resume Page"),
    new Menu("/technology","TECHNOLOGY", true,"The Technology Page"),
    new Menu("/about","ABOUT", true,"The About Page")
  ];

  constructor() { }

  ngOnInit() {
  }

}
