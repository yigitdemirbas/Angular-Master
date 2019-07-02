import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface, Datum } from '../../../../interfaces';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private router: Router,
    private service: ApiService
  ) { }

  ngOnInit() {
    this.list(1);
  }

  list(page: any) {
    this.service.fetchUsers(page).subscribe((res) => {
      this.userList = res.data;
      this.pagesCount = res.total;
    });
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
    this.list(page);
  }

  userSelected(user: Datum): void {
    this.router.navigate(['./user', user.id]);
  }

}
