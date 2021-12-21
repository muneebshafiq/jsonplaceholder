import { PostDetailsResolver } from './../../../resolvers/post-details.resolver';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
},
{
  path: 'list',
  component: ListComponent
},
{
  path: 'details/:id',
  component: DetailsComponent,
  resolve: { postData: PostDetailsResolver }
}
];

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatPaginatorModule
  ]
})
export class PostsModule { }
