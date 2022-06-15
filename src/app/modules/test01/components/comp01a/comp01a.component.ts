import { Component, OnInit } from '@angular/core';
import { Service01A } from '../../services/ser01a.service';

@Component({
  selector: 'app-comp01a',
  templateUrl: './comp01a.component.html',
  styleUrls: ['./comp01a.component.scss'],
  providers: [Service01A]
})
export class Comp01aComponent implements OnInit {

  /* 
    this component directly accesses the service instance 
    Service01A instance is available only in this component.................. not else where
  */
  constructor(private service01A: Service01A) { }

  ngOnInit(): void {
  }

  getNames1() {
    var names70 = this.service01A.getNames23();
    console.log(names70);
  }

  updateNames1() {
    this.service01A.updateNames23(['cristiano', 'karim', 'luka']);
  }

}
