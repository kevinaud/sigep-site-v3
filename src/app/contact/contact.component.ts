import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [
    {
      name: 'Kevin Aud',
      position: 'VP of Communications',
      email: 'Kevin_Aud@Baylor.edu',
      phone: '540-905-9197'
    },
    {
      name: 'Tommy Kava',
      position: 'President',
      email: 'Tommy_Kava@Baylor.edu',
      phone: '513-641-6285'
    },
    {
      name: 'Brett Feehan',
      position: 'VP of Recruitment',
      email: 'Brett_Feehan@Baylor.edu',
      phone: '818-430-8788'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
