import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import{Router, RouterModule} from '@angular/router'
import{HttpClientModule} from '@angular/common/http'
import { ExpenseServiceService } from './expense-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { ExpenseComponent } from './expense/expense.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './friends/list/list.component';
import { GlistComponent } from './group/glist/glist.component';
import { SingleViewComponent } from './group/single-view/single-view.component';
import { ElistComponent } from './expense/elist/elist.component';
import { EditListComponent } from './expense/edit-list/edit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    GroupComponent,
    ExpenseComponent,
    FriendsComponent,
    ProfileComponent,
    ListComponent,
    GlistComponent,
    SingleViewComponent,
    ElistComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
{path:"login",component:LoginComponent},
{path:"*",component:LoginComponent},
{path:"",component:LoginComponent},
{path:"signup",component:SignUpComponent},
{path:"group",component:GroupComponent},
{path:"expense",component:ExpenseComponent},
{path:"friends",component:FriendsComponent},
{path:"profile",component:ProfileComponent},
{path:"logout",component:LoginComponent},
{path:"dashboard",component:DashboardComponent},
{path:"list",component:ListComponent},
{path:"glist",component:GlistComponent},
{path:"singleView/:id",component:SingleViewComponent},
{path:"elist",component:ElistComponent},
{path:"edit/:id",component:EditListComponent}



    ])




    ,
  ],
  providers: [

    ExpenseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
