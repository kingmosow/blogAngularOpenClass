import { Component } from '@angular/core';
import {post} from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ',
      loveIts: 0, created_at: new Date()
    },
    {
      title: 'Mon deuxieme post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ',
      loveIts: 0, created_at: new Date()
    },
    {
      title: 'Encore un post', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ',
      loveIts: 0, created_at: new Date()
    }
  ];
  constructor() {
  }
}
