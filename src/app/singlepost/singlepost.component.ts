import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent {
  @Input() fromPost!:string;
}
