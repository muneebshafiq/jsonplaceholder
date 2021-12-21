import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component'
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';

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
    component: DetailsComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
  ];

@NgModule({
  declarations: [ListComponent, DetailsComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class UsersModule { }
