import { AuthGuard } from './../../shared/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: { permission: 'catalog.read' },
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: { permissions: 'user.read' },
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
