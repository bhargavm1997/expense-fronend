import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../expense-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
a:any;
  constructor(private http:ExpenseServiceService) { }

  ngOnInit(): void {
   this.a= this.http.getUserInfo()
   console.log(this.a.firstname)
  }

}
