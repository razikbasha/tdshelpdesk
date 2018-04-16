import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddtagComponent } from './addtag/addtag.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AuthGuard } from '../_guards/index';
import { SupporterComponent } from '../layout/supporter/supporter.component';
import { ModeratorComponent } from '../layout/moderator/moderator.component';
import { UserComponent } from '../layout/user/user.component';
import { LoginComponent } from '../login/login.component';
import { TicketdashboardComponent } from './ticketdashboard/ticketdashboard.component';
import { AddticketComponent } from './supporter/addticket/addticket.component';

const routes1: Routes = [
    
   
];

@NgModule({
    imports: [RouterModule.forChild(routes1)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
