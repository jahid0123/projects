import { Component, OnInit } from '@angular/core';
import { CallApiServiceService } from '../../services/call-api-Service/call-api-service.service';

@Component({
  selector: 'app-call-api',
  imports: [],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.css'
})
export class CallApiComponent implements OnInit{

  someString: string = '';

  constructor(private calService: CallApiServiceService){

  }
  ngOnInit(): void {
    this.calService.getDone().subscribe((text) =>{
      console.log(text);
      this.someString = text;
    });
  }

  getString(){
    this.calService.getDone().subscribe(text=>this.someString = text)
  } 

  fatchString(){
    this.calService.getDone().subscribe(
      (data) =>{
        this.someString = data;
        console.log("Fetched spells ", this.someString);
      },
      (error) => {
        console.error('Error fetching sometext: ', error);
      }
    )
  }


}
