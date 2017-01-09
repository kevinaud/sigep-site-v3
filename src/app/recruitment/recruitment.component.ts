import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  events = [
    {
      title: 'Game Night',
      date: '1/9',
      when: '5:30 pm',
      where: 'SUB Basement',
      inviteOnly: false
    },
    {
      title: 'IFC Showcase',
      date: '1/11',
      when: '7:00 pm',
      where: 'Barfield Drawing Room',
      inviteOnly: false
    },
    {
      title: 'Pick-Up Basketball',
      date: '1/12',
      when: '9:00 pm',
      where: 'Russel Gym',
      inviteOnly: false
    },
    {
      title: 'Range Day',
      date: '1/14',
      when: '1:00 pm',
      where: 'Cottonwood Golf Course',
      inviteOnly: false
    },
    {
      title: 'Cookout & UT Game',
      date: '1/17',
      when: '4:30 pm',
      where: 'Bear Park',
      inviteOnly: false
    },
    {
      title: 'Formal Smoker',
      date: '1/21',
      when: '6:00 pm',
      where: 'Vitek\'s BBQ',
      inviteOnly: true
    },
    {
      title: 'Interviews',
      date: '1/24',
      when: '5:00 pm',
      where: 'On Campus',
      inviteOnly: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
