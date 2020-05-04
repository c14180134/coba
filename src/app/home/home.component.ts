import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GlobalService} from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,public knt:GlobalService) { }
  idvarpass='';
  datadariglob=[]
  datatambah:any

  ngOnInit() {
  let id=this.route.snapshot.paramMap.get('id');
  this.idvarpass = id;
  this.datadariglob=this.knt.getdata();
  }
  Submit(x:string,y:string){
      this.datatambah={
        no : x,
        penjelasan : y,
      }
      this.datadariglob.push(this.datatambah);
      
    }
  

}