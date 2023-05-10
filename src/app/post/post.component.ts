import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title:string = "List of Posts";
  postMessage:string='This is a message from post componenet, which is the parent of the single post component';
  
  @Input() fromParent!:string;
}
