import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]

})

export class AppComponent  {
  name = 'Angular';
  constructor(private router : Router){}
    home2(){
      this.router.navigate(['/home2']);
    }
    homepass(){
      this.router.navigate(['/home',3]);
    }
    
    itemNama=[];
    itemPenjelasan=[];
    itembuah= [{
    nama:'kelengkeng',
    harga:10000
  },{
    nama:'jeruk',
    harga:7000

  }];

    itemJurusan= [{
    nama:'Informatika',
    penjelasan:'Komputer'
  },{
    nama:'Ekonomi',
    penjelasan:'Money'

  }];

    Submit(x,y){
        this.itemNama.push(x);
        this.itemPenjelasan.push(y);
    }
    

    
}
