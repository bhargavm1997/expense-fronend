import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from 'src/app/expense-service.service';

@Component({
  selector: 'app-elist',
  templateUrl: './elist.component.html',
  styleUrls: ['./elist.component.css']
})
export class ElistComponent implements OnInit {
  profile:any
  a:any
  f:any
  friend:any
  c:any
  b:any
  m=[]

  constructor(private http:ExpenseServiceService) { }

  ngOnInit(): void {

    this.profile=this.http.getUserInfo()
    this.http.elist(this.profile._id).subscribe(
      data=>
      {
       this.a=data["data"]
    for(let b of this.a)
    {
      this.getPaidByDetail(b.paidBy)     
    }
      })
  }

  getPaidByDetail(paidBy)
  {  
    this.http.getUserById(paidBy).subscribe(
    data=>
    {
     this.c= data["data"][0]
     this.m.push(this.c)
    })
  }
 

  
delete(id)
{
  let dat={
    expId:id,
   active:false
  }
  console.log(dat)
 
  this.http.editExpense(dat).subscribe(
    data=>{
      console.log(data["data"])
    })
 

}

}


