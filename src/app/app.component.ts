import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalService} from './global.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {
  name = 'Angular';
  datadariglob=[]


  constructor(private router : Router,public knt:GlobalService){

    this.datadariglob=this.knt.getdata();
    
  }
    home2(){
      this.router.navigate(['/home2']);
    }
    homepass(){
      this.router.navigate(['/home',3]);
    }
  Submit(x:string,y:string){
      let temp1=x;
      let temp2=y;
      let temp=[temp1,temp2];
      this.knt.add(temp);
    }
   
}
