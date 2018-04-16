import { Component, OnInit } from '@angular/core';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
import { Group } from '../../_models/index';
import { Book,User,Comment } from '../../_models/index';

import { BrowserModule } from '@angular/platform-browser';

import { JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activeticket',
  templateUrl: './activeticket.component.html',
  styleUrls: ['./activeticket.component.css'],
 
 
})
export class ActiveticketComponent implements OnInit {
  arrBirds: any [] = [
   
    { id:2, name: 'Open'},
    { id:3, name: 'Pending' },
    { id:4, name: 'Close' },
  ];

  arrPrio: any [] = [
    { id:1, name: 'Normal' },
    { id:2, name: 'Critical'},
    { id:3, name: 'Urgent' },
    
  ];
  name:string;
  model: any = {};
  showHide = false;
  showHidee = true;
  showHideee = false;
  ticketdate:any;
  username:string;
  submit(id){
    
    let stt = this.model.assignuser;
   
    this.uid = id;
    this.auservice.tupdate(this.uid,stt).subscribe( res => { 
      
       
       this.router.navigate(['/assigntickets']);
     
     });
  }
  
  changeShowStatus(){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    this.showHideee = !this.showHideee;
  }
  
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  private auservice: AuthenticationService) {
    var name= localStorage.getItem('username');
    this.username=name.replace(/\"/g, "");

    this.model.resname=this.username;
   
    
    this.model.resdate = new Date();
      
     }
book: Book[] = [];
tickett:any;
tic:any;
ticalert:any;

_id;
id;
idd;
uid;
cid;
hid;

  users: User[] = [];
  comments:any;
  
  ngOnInit() {
      this.userService.getAllTickets().subscribe(book =>  { this.book = book; });
      this.userService.getAll().subscribe(users => { this.users = users; });

      
     // this.userService.getAllHistory().subscribe(comments => {  this.comments = comments});

}
ticketinfo(_id){
 
  this.showHide = !this.showHide;
  this.showHidee = !this.showHidee;
  this._id = _id;
  this.auservice.ticinfo(this._id).subscribe(
    tickett => { this.tickett = tickett; } );

    let alr = "yes";

    this.auservice.ticalert(this._id,alr).subscribe(
      ticalert => { 
        console.log(ticalert);
        this.ticalert = ticalert; } );

        
        
}

getHistory(_id){
  this.hid = _id;
  
  this.auservice.getHistory(this.hid).subscribe(comments => { 
    
    this.comments = comments});
}
ticketdelete(_id){
  //alert(_id);
  this.userService.delete(_id).subscribe( res => { 
    
    this.router.navigate(['/addaccount']);
  
  });
}

comment(id){
  
this.cid = id;
  let rn = this.model.resname;
 let rd = this.model.resdate;
 let co = this.model.comment;
  this.auservice.comment(this.cid,rn,rd,co).subscribe( res => { 
    
     alert("Ticket Updated");
   
   });
 
}

ticketupdate(_id){
  
  this.idd = _id;
 let ticket={
   status:this.model.status,
   
 }

 let st = this.model.status;
 let pr = this.model.priority;
       
  this.auservice.update(this.idd,st,pr).subscribe( res => { 
   
    //this.router.navigate(['/addaccount']);
    alert("Ticket Updated");
  
  });
}


ticketopen(){
  alert("open");
 this.router.navigate(['/ticketinfo']);
  }
  ticketpending(){
    this.router.navigate(['/ticketpending']);
     }
     ticketclose(){
      this.router.navigate(['/ticketclose']);
     }

}
