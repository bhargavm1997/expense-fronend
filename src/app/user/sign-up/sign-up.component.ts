import { Component, OnInit } from '@angular/core';
import{ExpenseServiceService} from '../../expense-service.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private http:ExpenseServiceService, private route:Router) { }

  ngOnInit(): void {
  }


firstname:any;
lastname:any;
email:any;
password:any;
mobile:any;
country:any;


signup(){

  let data={
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    password:this.password,
    mobile:this.mobile,
    country:this.country
  }
  console.log(data)
this.http.signup(data).subscribe(
  data=>
  {
console.log(data)
//data["data"]
this.route.navigate(["/login"])
  })

}


}




