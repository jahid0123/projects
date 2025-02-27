import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/harry-portter/services.service';

@Component({
  selector: 'app-harry-potter',
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css'
})
export class HarryPotterComponent implements OnInit{

  spells: any[] = [];

  constructor(private services: ServicesService){
    
  }
  
  ngOnInit(): void {
    this.fatchSpells();
  }

  getSpells(){
    this.services.getSpells().subscribe(spells => this.spells = spells);
  }

  fatchSpells(){
    this.services.getSpells().subscribe(
      (data) =>{
        this.spells = data;
        console.log("Fetched spells ", this.spells);
      },
      (error) => {
        console.error('Error fetching spells: ', error);
      }
    )
  }
}
