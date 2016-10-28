import { Component, OnInit, Input } from '@angular/core';

import { NavLocation } from './nav-location.ts';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavOpen: boolean;

  @Input() navLocations: NavLocation[] = [];

  constructor() { }

  ngOnInit() {
    this.sidenavOpen = false;
  }

  toggle() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  open() {
    this.sidenavOpen = true;
  }

  close(sidenav) {
    sidenav.close();
  }

  closed(event) {
    this.sidenavOpen = false;
  }

}
