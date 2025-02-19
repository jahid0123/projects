import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent implements OnInit {
  u: User = new User('', 0, '', '');
  isUpdate = false;

  ngOnInit(): void {
    console.log('CreateUserComponent!!');
  }

  onSubmit() {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    // users.push(this.u);



    if (this.isUpdate) {
     users = users.map((zahid) =>
        zahid.phone == this.u.phone ? this.u : zahid,
      );
    } else {
      users.push(this.u);
    }

    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('', 0, '', '');
    //alert('User added successfully!');
    this.redirect();
  }

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['user']) {
      this.u = nav.extras.state['user'];
      this.isUpdate = true;
    }
  }

  redirect() {
    this.router.navigate(['/user-list']);
  }
}
