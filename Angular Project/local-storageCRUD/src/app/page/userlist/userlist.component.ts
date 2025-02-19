import { Component, OnInit } from '@angular/core';
import { User } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  imports: [],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit{
  
  user: User[] = [];

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('users') || '[]');
  }
  constructor(private router: Router){

  }

  editUser(user: User){
    this.router.navigate(['/createUser'], {state: {user}});
  }

  deleteUser(user: User){
    if(confirm('Are you sure you want to delete this user?')){
      this.user = this.user.filter(u => u !== user);
      localStorage.setItem('users', JSON.stringify(this.user));
    }
  }

}
