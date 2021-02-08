import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../expense-service.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
profile:any
a:any
c:any
amount:any
group:any
expense:any
friendName:any
single:any
friendsArray=[]
paidBy=[]
paid:any
  constructor(private http:ExpenseServiceService, private route:Router) { }

  ngOnInit(): void {

    this.profile=this.http.getUserInfo()
this.http.glist(this.profile._id).subscribe(
  
  data=>
  {
//console.log(data["data"])
this.a=data["data"]
  })


  }

  groupSelect(value)
  {
    this.friendsArray=[]
    this.paidBy=[]

//console.log(value)
this.http.singleView(value).subscribe(
  
  
  data=>{

this.c=data["data"][0].users
//console.log(this.c)
for(let d of this.c)
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

addExpense()
{
  let exp={
    expName:this.expense,
    group:this.group,
    amount:this.amount,
    friend:this.friendName,
    paidBy:this.paid,

  }
  this.http.addExpense(exp).subscribe(
    data=>
    {
     this.route.navigate(["/elist"])
    })

}

}
