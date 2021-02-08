import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  constructor(private http:HttpClient) { }
private url="http://localhost:3000/api/v1"


signup(data)

{
return this.http.post(this.url + "/signup" ,data)

}

login(data)
{
  return this.http.post(this.url + "/login" , data)
}



setUserInfo(data)
{
  localStorage.setItem("key",JSON.stringify(data))

}

getUserInfo()
{
  return JSON.parse(localStorage.getItem("key"))
}



addfriend(data)
{

return this.http.post(this.url + "/friends/add" ,data )
}




getUser(userid)
{
  return this.http.get(this.url + "/list?userid="+ userid)
}



addGroup(data)
{
return  this.http.post(this.url + "/group/add" , data )
}



glist(id)
{
  return this.http.get(this.url + "/group/list?userid=" + id)
}

singleView(id)
{
  return this.http.get(this.url + "/group/view?groupid=" +id)
}


getUserById(id)
{
  return this.http.get(this.url + "/getUser?userid=" +id)
}


addExpense(data)
{
  return this.http.post(this.url + "/addExpense" ,data)
}

elist(data)
{
  return this.http.get(this.url + "/elist?userid=" +data)
}


getExpense(id)
{
  return this.http.get(this.url + "/getExpense?id=" +id)
}


editExpense(data)
{
  return this.http.put(this.url + "/editExpense" , data)
}

}

