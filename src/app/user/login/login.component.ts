import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import{ExpenseServiceService} from '../../expense-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:ExpenseServiceService, private route:Router) { }

  ngOnInit(): void {
  }
email:any;
password:any;


login()
{

  let data={
    email:this.email,
    password:this.password
  }
console.log(data)
this.http.login(data).subscribe(
  
  data=>
  
  {

    console.log(data)
    this.http.setUserInfo(data["data"])
this.route.navigate(["/dashboard"])
  })
}
}

