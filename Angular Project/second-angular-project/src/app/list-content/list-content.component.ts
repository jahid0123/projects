import { Component } from '@angular/core';

@Component({
  selector: 'app-list-content',
  imports: [],
  // templateUrl: './list-content.component.html',
  template:`
  <table>
    <thead>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Cuntry</th>
      <th>Picture</th>
    </thead>
    <tbody>
      @for(person of persons; track person.name){
        <tr>
        <td>{{person.name}}</td>
        <td>{{person.age}}</td>
        <td>{{person.city}}</td>
        <td>{{person.cuntry}}</td>
        <td><img src="{{person.picture}}" alt="{{person.name}}"></td>
        </tr>
      }
  
    </tbody>
  </table>
  `,
  styleUrl: './list-content.component.css'
})
export class ListContentComponent {

  persons= [
    { 
      name: 'John Doe', 
      age: 20, 
      city: 'Dhaka',
      cuntry: 'Bangladesh',
      picture: 'https://picsum.photos/id/237/200/300'
    },
    { 
      name: 'John Doe', 
      age: 20, 
      city: 'Dhaka',
      cuntry: 'Bangladesh',
      picture: 'https://picsum.photos/200/300?grayscale'
    },
  
    { 
      name: 'John Doe', 
      age: 20, 
      city: 'Dhaka',
      cuntry: 'Bangladesh',
      picture: 'https://picsum.photos/seed/picsum/200/300'
    }
    
  ];


}
