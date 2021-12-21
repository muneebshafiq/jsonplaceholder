import { PostsService } from './../../../../services/posts/posts.service';
import { IUser } from './../../../../models/users/users';
import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: IUser;
  userPosts: number
  constructor(private userService: UsersService, private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe( data => {
      this.user = data;
      this.getPosts(id);
    })
  }

  getPosts(id:number) {
    this.postService.loadUserPosts(id).subscribe( data => {
      this.userPosts = data.length;
    })
  }

}
