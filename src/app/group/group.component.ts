import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../expense-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
a:any;
b:any;
profile:any;
name:String;
friendName:String;

  constructor(private http:ExpenseServiceService, private route:Router) { }

  ngOnInit(): void {
    this.profile=this.http.getUserInfo()
    this.http.getUser(this.profile.userid).subscribe(
  
      data=>
      
      {this.a=data["data"]
      console.log(this.a)
    }
      )
  }
group()
{
this.b= {
  name:this.name,
  friend:this.friendName,
  createdBy:this.profile.userid
}
console.log(this.b)

this.http.addGroup(this.b).subscribe(
  data=>
  
  {if(data["status"]==200)
  {

    
this.route.navigate(["/glist"])

  }
  })
}
 


}
