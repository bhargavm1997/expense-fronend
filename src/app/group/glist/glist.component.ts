import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/expense-service.service';


@Component({
  selector: 'app-glist',
  templateUrl: './glist.component.html',
  styleUrls: ['./glist.component.css']
})
export class GlistComponent implements OnInit {
a:any;
  profile:any;

  constructor(private http:ExpenseServiceService) { }

  ngOnInit(): void {


    this.profile=this.http.getUserInfo()

    this.http.glist(this.profile._id).subscribe(
      
      data=>
      
      {


        this.a=data["data"]
        console.log(this.a)
      })
  }

}
