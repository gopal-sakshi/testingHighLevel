import { Component, OnInit } from '@angular/core';
import { Test01A } from '../../classes/test01a.class';

@Component({
  selector: 'app-comp01c',
  templateUrl: './comp01c.component.html',
  styleUrls: ['./comp01c.component.scss']
})
export class Comp01cComponent extends Test01A implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  doStuff1(){
    var clubNames = this.getClubs1();
    console.log(clubNames);    
  }

}
