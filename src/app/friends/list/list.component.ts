import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/expense-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
a:any;
profile:any;
  constructor(private http:ExpenseServiceService) { }

  ngOnInit(): void {
this.profile=this.http.getUserInfo()
this.http.getUser(this.profile.userid).subscribe(
  
  data=>
  
  {this.a=data["data"]
  console.log(this.a)
}
  )

  }

}
