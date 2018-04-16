import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { LayoutComponent } from './layout/layout.component';
//import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ModeratorComponent } from './layout/moderator/moderator.component';
import { UserComponent } from './layout/user/user.component';
import { SupporterComponent } from './layout/supporter/supporter.component';
import { AddbookComponent } from './layout/addbook/addbook.component';
import { AddtagComponent } from './layout/addtag/addtag.component';
import { AddgroupComponent } from './layout/addgroup/addgroup.component';
import { TicketdashboardComponent } from './layout/ticketdashboard/ticketdashboard.component';
import { AddaccountComponent } from './layout/addaccount/addaccount.component';
import { ActiveticketComponent } from './layout/activeticket/activeticket.component';
import { TicketinfoComponent } from './layout/ticketinfo/ticketinfo.component';
import { TicketpendingComponent } from './layout/ticketpending/ticketpending.component';
import { TicketinformationComponent } from './layout/ticketinformation/ticketinformation.component';
import { TicketcloseComponent } from './layout/ticketclose/ticketclose.component';
import { AdminticketsComponent } from './layout/admintickets/admintickets.component';
import { TickettypeComponent } from './layout/tickettype/tickettype.component';
import { AssignticketsComponent } from './layout/assigntickets/assigntickets.component';
import { UseractiveticketsComponent } from './layout/useractivetickets/useractivetickets.component';
import { UserassignComponent } from './layout/userassign/userassign.component';
import { UseropenComponent } from './layout/useropen/useropen.component';
import { UserpendingComponent } from './layout/userpending/userpending.component';
import { UsercloseComponent } from './layout/userclose/userclose.component';

const appRoutes: Routes = [
    //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    
    // otherwise redirect to home
    { path: 'layout',   component: LayoutComponent,  canActivate: [AuthGuard]},
    {
        path: 'layout',
        component: LayoutComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           
            //{ path: 'dashboard', component: HomeComponent,canActivate: [AuthGuard] },
            
            
        ]
    },


     
    { path: 'Moderator', component: ModeratorComponent, canActivate: [AuthGuard]},
    {
        path: '',
        component: ModeratorComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'moddashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'addmodticket', component: AddbookComponent, canActivate: [AuthGuard]},
           { path: 'modtickets', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'modmsg', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'modacc', component:AddaccountComponent,canActivate: [AuthGuard] },
           { path: 'modreports', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'modnotices', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'moderatoractive', component: ActiveticketComponent, canActivate: [AuthGuard]},
           { path: 'Moderator/dashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },

        ]    
    },









    { path: 'User', component: UserComponent, canActivate: [AuthGuard]},

    {
        path: '',
        component: UserComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'userdashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'adduserticket', component: AddbookComponent, canActivate: [AuthGuard]},
           { path: 'usertickets', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'usermsg', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'useractive', component: UseractiveticketsComponent, canActivate: [AuthGuard]},
           { path: 'User/dashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           
           { path: 'userassigntickets', component:UserassignComponent,canActivate: [AuthGuard] },
           { path: 'useropen',component:UseropenComponent,canActivate: [AuthGuard]},
           { path: 'userpending',component:UserpendingComponent,canActivate: [AuthGuard]},
           { path: 'userclose',component:UsercloseComponent,canActivate: [AuthGuard]},
            
          
        ]
    },









    { path: 'Supporter', component: SupporterComponent, canActivate: [AuthGuard]},
    {
        path: '',
        component: SupporterComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'addsupticket', component: AddbookComponent, canActivate: [AuthGuard]},
           { path: 'suptickets', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'supdashboard', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'supmsg', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'supreports', component: TicketdashboardComponent, canActivate: [AuthGuard]},
           { path: 'Supporter/dashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
           { path: 'supporteractive', component: ActiveticketComponent, canActivate: [AuthGuard]},


           
        ]   
    },
            
    { path: 'Administrator',   component: LayoutComponent,  canActivate: [AuthGuard]},
    {
        path: '',
        component: LayoutComponent,canActivate: [AuthGuard],    
        children: [
           //{ path: '', redirectTo: 'dashboard' },
           { path: 'ticketdashboard', component:AdminticketsComponent,canActivate: [AuthGuard] },
            { path: 'dashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
            { path: 'addbook', component: AddbookComponent, canActivate: [AuthGuard]},
            { path: 'addtag', component: AddtagComponent,canActivate: [AuthGuard] },
            { path: 'addtickettype', component: TickettypeComponent,canActivate: [AuthGuard] },
            { path: 'addgroup', component: AddgroupComponent,canActivate: [AuthGuard] },
            { path: 'addaccount',component:AddaccountComponent,canActivate: [AuthGuard]},
            { path: 'adminactive',component:ActiveticketComponent,canActivate: [AuthGuard]},
            { path: 'Administrator/dashboard', component:TicketdashboardComponent,canActivate: [AuthGuard] },
            { path: 'ticketinfo',component:TicketinfoComponent,canActivate: [AuthGuard]},
            
            { path: 'ticketpending',component:TicketpendingComponent,canActivate: [AuthGuard]},
            { path: 'ticketinformation',component:TicketinformationComponent,canActivate: [AuthGuard]},
            { path: 'ticketclose',component:TicketcloseComponent,canActivate: [AuthGuard]},
            { path: 'assigntickets',component:AssignticketsComponent,canActivate: [AuthGuard]},
        ]
    },
    
];

export const routing = RouterModule.forRoot(appRoutes);