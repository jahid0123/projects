import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  /*templateUrl: './app.component.html',*/
  /*template: `
  @if(marks.mark >=80){
    <div>Your got grade = A+</div>
  }@else if(marks.mark >=70){
    <div>Your got grade = A</div>
  }@else if(marks.mark >=60){
    <div>Your got grade = A-</div>
  }@else if(marks.mark >=50){
    <div>Your got grade = B</div>
  }@else if(marks.mark >=40){
    <div>Your got grade = C</div>
  }@else if(marks.mark <=40 && marks.mark >=0){
    <div>Your got grade = F</div>
  }
  `,*/
  template: `

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
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Jahid Ahmed';
  marks = {
    mark: 20,

  };
// Define an interface for the object structure


// Create an array of objects of type 'Student'
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