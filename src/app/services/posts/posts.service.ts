import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/posts/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private endpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  loadPosts(): Observable<IPost[]> {
    // Add a request to get posts using `endpoint`
    return this.http.get<IPost[]>(this.endpoint)
  }

  loadPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.endpoint+`/${id}`)
  }

  loadUserPosts(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.endpoint+`?userId=${id}`)
  }
}
