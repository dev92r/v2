import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/app.animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  host: {
    '[@fadeInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    fadeInOut()
  ]
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
