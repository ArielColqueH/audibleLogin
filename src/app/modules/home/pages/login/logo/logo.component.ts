import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() componentWidth: number = 0;
  imagePath =
    'https://upload.wikimedia.org/wikipedia/commons/d/d2/Audible_logo.svg';
  constructor() {}

  ngOnInit(): void {
    console.log(this.componentWidth);
  }
}
