import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../../_services/index';
import { User, Book, Group} from '../../_models/index';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-ticketdashboard',
  templateUrl: './ticketdashboard.component.html',
  styleUrls: ['./ticketdashboard.component.css']
})
export class TicketdashboardComponent implements OnInit {
  
  amexdata:any[];
  
  chart:Chart;
  users: User[] = [];
  book: Book[] = [];
  groupp: Group[] = [];

  arrBirds: any [] = [
    { id:1, name: 'New' },
    { id:2, name: 'Open'},
    { id:3, name: 'Pending' },
    { id:3, name: 'Close' }
  ];
  constructor(
    
    private userService: UserService,
    private alertService: AlertService) {
      
     }

  ngOnInit() {
    
    this.userService.getAll().subscribe(users => { this.users = users; });
    this.userService.getAllTickets().subscribe(book =>  { this.book = book; });
    this.userService.getAllgroups().subscribe(groupp =>  { this.groupp = groupp; });
    this.chart = new Chart({
      chart:{
          type:'line',
          height: 241
      },
      title:{ text:'Ticket Information'},
      
     
      legend:{
          layout:"vertical",
          align:"right",
          verticalAlign:"middle"
      },
      plotOptions:{
          series:{"pointStart":Date.UTC(2018, 2, 1),
          pointIntervalUnit:"day"}
      },
      xAxis:{
          type:"datetime"
      },
      
      series:[
          {
              name:"Tickets",
              
          }]
  })
    
    this.userService.getAllTickets()
    .subscribe(book => {
      console.log(book);
          for (let i = 0; i < book.length; i++) {
             let amexdata =  book[i]['ticketdate'];
             console.log(amexdata);
            
             this.chart.addPoint(i+1);
           
         
            } 

            
         })
         

    
  }

  status(){
    alert("hiiiii");
  }
  

  
}




