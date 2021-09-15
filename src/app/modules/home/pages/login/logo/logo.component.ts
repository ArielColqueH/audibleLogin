import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() componentWidth: number = 0;
  imagePath = '../../../../assets/images/audibleLogo.png';
  constructor() {}

  ngOnInit(): void {
    console.log(this.componentWidth);
  }
}
