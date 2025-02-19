import { Routes } from '@angular/router';
import { CreateUserComponent } from './page/create-user/create-user.component';
import { UserlistComponent } from './page/userlist/userlist.component';
//import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'user-list', component: UserlistComponent},
    {path: 'createUser', component: CreateUserComponent},
    {path:'**', redirectTo: ''}
];
