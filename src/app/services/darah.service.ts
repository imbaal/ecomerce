import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarahService {
li :any
lis =[]
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){ 
        
      }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });
    
  }


}
