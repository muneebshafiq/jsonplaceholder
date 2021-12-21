import { Router } from '@angular/router';
import { IPost } from './../../../../models/posts/posts';
import { PostsService } from './../../../../services/posts/posts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // posts: IPost[] = [];
  obs: Observable<IPost[]>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<IPost>;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.loadPosts().subscribe( (data) => {
      // this.posts = data;
      this.dataSource = new MatTableDataSource<IPost>(data);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      // console.log(data, this.dataSource);
    });
  }

  public onCardClick(id: number){
    console.log(id);
    this.router.navigate([`/admin/posts/details/${id}`]);
  }

}
