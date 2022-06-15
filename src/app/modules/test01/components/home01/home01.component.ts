import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home01',
  templateUrl: './home01.component.html',
  styleUrls: ['./home01.component.scss']
})
export class Home01Component implements OnInit {

  showComp01a:boolean = false;
  showComp01b:boolean = false;
  showComp01c:boolean = false;
    
  constructor() { }

  ngOnInit(): void {
  }

}
