import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router'
import { ExpenseServiceService } from 'src/app/expense-service.service';
@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
a:any
b:any
  constructor(private route:ActivatedRoute, private http:ExpenseServiceService) { }

  ngOnInit(): void {

this.a= this.route.snapshot.paramMap.get("id")
console.log(this.a)
this.http.singleView(this.a).subscribe(
  data=>
  
  
  {
    this.b =data["data"][0]
    console.log(this.b)
  })

  }

}
