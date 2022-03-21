import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@fadeInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    fadeInOut()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
