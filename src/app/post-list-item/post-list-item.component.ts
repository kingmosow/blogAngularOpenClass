import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  constructor() {
  }
  //
  onLoveIt() {
    return this.loveIts++ ;
  }
  onDontLoveIt() {
    return this.loveIts-- ;
  }
  ngOnInit() {
  }
}
