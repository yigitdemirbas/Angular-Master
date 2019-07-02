import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, Datum } from '../../../../interfaces';
import { ApiService } from '../../../core/services';
import { DataTransportService } from 'src/modules/core/services/data-transport.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dataService: DataTransportService) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService.fetchUserById(userId).subscribe((user: any) => {
      console.log(user.data);
      this.dataService.userUpdate(user.data);
    });
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
