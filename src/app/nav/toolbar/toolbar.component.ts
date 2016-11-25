import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() openSidenav: EventEmitter<any> = new EventEmitter();
  authenticated: Observable<boolean>;

  constructor(private userService: UserService) {
    this.authenticated = this.userService.authStatus;
  }

  ngOnInit() { }

  menuIconClick() {
    this.openSidenav.emit(null);
  }

  logout() {
    this.userService.logout();
  }

}
