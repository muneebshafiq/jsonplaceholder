import { UsersService } from './../../../../services/users/users.service';
import { IUser } from './../../../../models/users/users';
import { PostsService } from './../../../../services/posts/posts.service';
import { IPost } from './../../../../models/posts/posts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  post: IPost;
  user: IUser;
  constructor(private postService: PostsService, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.getPostFromResolver()
    this.getUser(this.post.userId);
    // this.getPost(id);
    // console.log(this.route.snapshot.data)
  }

  getPostFromResolver() {
    this.route.data.subscribe((res) => {
      this.post = res.postData;
    })
  }

  getPost(id: number) {
    this.postService.loadPost(id).subscribe( data => {
      this.post = data;
      this.getUser(this.post.userId);
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe( data => {
      this.user = data;
    })
  }

}
