import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
   public itemJurusan= [{
    nama:'Informatika',
    penjelasan:'Komputer'
  },{
    nama:'Ekonomi',
    penjelasan:'Money'

  }];

  public getdata(){
    return this.itemJurusan;
  }

  public add(x,y){
    
  }


}