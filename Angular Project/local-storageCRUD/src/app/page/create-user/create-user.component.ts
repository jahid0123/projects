import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../app.component';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  user: User = new User('',0,'','');
 
  ngOnInit(): void {
    console.log('CreateUserComponent!!');
  }

  onSubmit () {
    let users =  JSON.parse(localStorage.getItem('users') || '[]');

    users.push(this.user);

    localStorage.setItem('users', JSON.stringify(users));

    this.user = new User('', 0, '','');
    alert('User added successfully!');
    
  }

  

}
