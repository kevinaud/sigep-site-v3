import { Component, OnInit } from '@angular/core';

import { ExecMembers } from './exec-member';

@Component({
  selector: 'app-exec-board',
  templateUrl: './exec-board.component.html',
  styleUrls: ['./exec-board.component.css']
})
export class ExecBoardComponent implements OnInit {

  execMembers = ExecMembers;

  constructor() { }

  ngOnInit() {

  }

}
