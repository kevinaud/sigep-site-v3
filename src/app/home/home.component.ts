import { Component, OnInit } from '@angular/core';

declare var FB: any;
declare var twittr: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fbWidth = 300;

  constructor() { }

  ngOnInit() {

    let fbParams = {
      appId: '770281793120820',
      xfbml: true,
      version: 'v2.8'
    };

    FB.init(fbParams);

    (<any>window).twttr = (function(d, s, id) {

      var js, fjs = d.getElementsByTagName(s)[0],
      t = (<any>window).twttr || {};
      if (d.getElementById(id)) {
       return t;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;

    }(document,'script', 'twitter-wjs'));

    (<any>window).twttr.ready(function(){
      (<any>window).twttr.widgets.load();
    });

  }

}
