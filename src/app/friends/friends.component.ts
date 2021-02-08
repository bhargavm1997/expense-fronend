import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../expense-service.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  name:any;
  email:any;
  profile:any;
  constructor(private http:ExpenseServiceService, private route:Router) { }

  ngOnInit(): void {
    this.profile=this.http.getUserInfo()
  }
add()
{
var addfriend={
  name:this.name,
  email:this.email,
  createdBy:this.profile.userid




}

this.http.addfriend(addfriend).subscribe(
  
  data=>
  
  {
    console.log(data)
    
  if(data["status"]==200)
   {
    this.route.navigate(["/list"])
   }
  })


}
}
