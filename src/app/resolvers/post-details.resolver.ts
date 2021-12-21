import { PostsService } from './../services/posts/posts.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<boolean> {
  constructor(private postService: PostsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {    
    return this.postService.loadPost(route.params.id)
  }
}
