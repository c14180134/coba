import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }
   public Jurusan= [{
    nama:'Informatika',
    penjelasan:'Komputer'
  },{
    nama:'Ekonomi',
    penjelasan:'Money'

  }];

  public getdata(){
    return this.Jurusan;
  }

  public add(temp){
     this.Jurusan.push(temp);
  }
  public setData(databaru){
    this.Jurusan = databaru;
  }


}