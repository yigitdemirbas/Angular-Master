import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserInterface, Datum } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';
import { DataTransportService } from 'src/modules/core/services/data-transport.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: Datum;

  constructor(@Optional() private parent: UserComponent, private dataService: DataTransportService) { }

  ngOnInit() {

    this.dataService.user.subscribe((user: any) => { this.user = user });

    console.log(this.parent);
    // this.parent.user = { ...this.user };
  }

}
