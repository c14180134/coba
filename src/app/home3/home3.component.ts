import { Component, OnInit } from '@angular/core';
import { GlobalService} from '../global.service'
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  datadariglob=[]
  datatambah:any
  constructor(public knt:GlobalService) { }

  ngOnInit() {
    this.datadariglob=this.knt.getdata();
  }

  Edit(index,penjelasans){
    index=index-1
    this.datatambah={
        
        penjelasan : penjelasans,
      }
    this.datadariglob[index]=this.datatambah
  }

}