import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title!:string;
  details!:string;
  imgUrl!:string;
  postUrl!:string;
  boolAddBackground!:boolean;

}

