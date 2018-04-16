import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SupporterComponent } from './supporter/supporter.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { UserComponent } from './user/user.component';
import { SidebarSupporterComponent } from '../layout/components/sidebar_supporter/sidebar_supporter.component';
import { HeaderoneComponent } from '../layout/components/headerone/headerone.component';
import { HeadertwoComponent } from './components/headertwo/headertwo.component';
import { HeaderthreeComponent } from './components/headerthree/headerthree.component';
import { SidebartwoComponent } from './components/sidebartwo/sidebartwo.component';
import { SidebarthreeComponent } from './components/sidebarthree/sidebarthree.component';
import { TicketdashboardComponent } from './ticketdashboard/ticketdashboard.component';
import { AddticketComponent } from './supporter/addticket/addticket.component';
import { ActiveticketComponent } from './activeticket/activeticket.component';
import { TicketinfoComponent } from './ticketinfo/ticketinfo.component';
import { TicketpendingComponent } from './ticketpending/ticketpending.component';
import { TicketinformationComponent } from './ticketinformation/ticketinformation.component';
import { TicketcloseComponent } from './ticketclose/ticketclose.component';
import { Chart } from 'angular-highcharts';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TickettypeComponent } from './tickettype/tickettype.component';
import { AssignticketsComponent } from './assigntickets/assigntickets.component';
import { UseractiveticketsComponent } from './useractivetickets/useractivetickets.component';
import { UserassignComponent } from './userassign/userassign.component';
import { UseropenComponent } from './useropen/useropen.component';
import { UserpendingComponent } from './userpending/userpending.component';
import { UsercloseComponent } from './userclose/userclose.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        ChartsModule,
        ChartModule,
        FormsModule,
       
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SupporterComponent,SidebarComponent, HeaderComponent,  ModeratorComponent, UserComponent, SidebarSupporterComponent, HeaderoneComponent, HeadertwoComponent, HeaderthreeComponent, SidebartwoComponent, SidebarthreeComponent, TicketdashboardComponent, AddticketComponent, ActiveticketComponent, TicketinfoComponent, TicketpendingComponent, TicketinformationComponent, TicketcloseComponent, TickettypeComponent, AssignticketsComponent, UseractiveticketsComponent, UserassignComponent, UseropenComponent, UserpendingComponent, UsercloseComponent]
})
export class LayoutModule {}
