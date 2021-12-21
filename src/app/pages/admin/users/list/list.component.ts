import { IUser } from './../../../../models/users/users';
import { UsersService } from './../../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: IUser[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( data => {
      this.users = data;
    });
  }

  showDetails(id:number) {
    console.log(id);
    
  }

}
