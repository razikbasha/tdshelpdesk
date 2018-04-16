import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../../_services/index';
import { User, Book, Group} from '../../_models/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admintickets',
  templateUrl: './admintickets.component.html',
  styleUrls: ['./admintickets.component.css']
})
export class AdminticketsComponent implements OnInit {
  bookone: Book[] = [];
  book: Book[] = [];
  booktwo: Book[] = [];
  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit() {
    this.userService.getAllTicketsopen().subscribe(book =>  { 
      
      this.book = book; });
      this.userService.getAllTicketspending().subscribe(bookone =>  { 
        
        this.bookone = bookone; });
        this.userService.getAllTicketsclose().subscribe(booktwo =>  { 
          
          this.booktwo = booktwo; });
  }

  ticketopen(){
    this.router.navigate(['/ticketinfo']);
     }
     ticketpending(){
       this.router.navigate(['/ticketpending']);
        }
        ticketclose(){
         this.router.navigate(['/ticketclose']);
        }

}
