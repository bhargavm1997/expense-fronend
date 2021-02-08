import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { getgroups } from 'process';
import { ExpenseServiceService } from 'src/app/expense-service.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

a:any
f:any
b:any
g:any
single:any
e:any
c:any
expense:any
friend=[]
group:any
friendName:any
paid:any
paidBy:any
friendsArray=[]

amount:any
  constructor(private http:ExpenseServiceService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

this.a=this.route.snapshot.paramMap.get("id")
console.log(this.a)
this.http.getExpense(this.a).subscribe(
  data=>
  {
    this.b=data["data"][0]
this.getGroup(this.b.groupName)
this.paidByDetail(this.b.paidBy)

  })

  }
getGroup(groupName)
{
this.http.singleView(groupName).subscribe(
  data=>{
    this.c=data["data"][0]
    this.getFriend(this.c.users)
  })
}

paidByDetail(data)
{
this.http.getUserById(data).subscribe(
  data=>{
    this.f=data["data"][0]
  })
}
getFriend(data)
{
  for(let d of data)
  {
    this.http.getUserById(d).subscribe(
      data=>{
        this.e=data["data"][0]   
        this.friend.push(this.e)

      })
  }

}
groupSelect(value)
{
  this.friendsArray=[]
  this.paidBy=[]

//console.log(value)
this.http.singleView(value).subscribe(


data=>{

this.g=data["data"][0].users
//console.log(this.c)
for(let d of this.g)
{
console.log(d)
this.http.getUserById(d).subscribe(
  data=>{
   this.single= data["data"][0]
   console.log(this.single)
   this.friendsArray.push(this.single)
   this.paidBy.push(this.single)


  })

}

})
}
  editExpense()
  {
 let dat={
   expId:this.b._id,
   expName:this.b.expName,
   group:this.c._id,
   amount:this.b.amount,
   friends:this.friend,
   paidBy:this.f._id
 }
 console.log(dat)

 this.http.editExpense(dat).subscribe(
   data=>{
     console.log(data["data"])
   })

  
  }

}
