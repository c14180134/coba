import { Component, OnInit } from '@angular/core';
import { GlobalService} from '../global.service'

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(public knt:GlobalService) { }
  datadariglob=[]
  
  ngOnInit() {
    this.datadariglob=this.knt.getdata();
  }
  

}