import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/app.animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  host: {
    '[@fadeInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    fadeInOut()
  ]
})
export class SkillsComponent implements OnInit {

  scrollTop() {
    window.scrollTo(0,0);
  }

  constructor() {  
  }


  ngOnInit(): void {
  }

}
