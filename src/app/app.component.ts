import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    (function () {
      $(".hamburger-wrapper").on("click", function () {
        $(".hamburger-menu").toggleClass("animate");
        $('.hamburger-wrapper').toggleClass("bg");
        $('.menu-item').toggleClass("slidein");
      });
    })();
  }
}
