import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/app.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: {
    '[@fadeInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    fadeInOut()
  ]
})
export class ProfileComponent implements OnInit {

  scrollTop() {
    window.scrollTo(0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
