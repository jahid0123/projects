import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { PostApprovalDetailsComponent } from './component/post-approval-details/post-approval-details.component';

export const routes: Routes = [

    
    {path: 'data-binding', component: PostApprovalDetailsComponent, pathMatch: 'full'},
    {path: '', redirectTo: 'data-binding', pathMatch: 'full'}

];
