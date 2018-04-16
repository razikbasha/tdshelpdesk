import { Component, OnInit } from '@angular/core';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';
import { Book,User } from '../../_models/index';

@Component({
  selector: 'app-userassign',
  templateUrl: './userassign.component.html',
  styleUrls: ['./userassign.component.css']
})
export class UserassignComponent implements OnInit {

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

  submit(id){
    alert(id);
    let stt = this.model.assignuser;
    alert(stt);
    this.uid = id;
    this.auservice.tupdate(this.uid,stt).subscribe( res => { 
      
       alert("User Assigned");
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
      
     }
book: Book[] = [];
tickett:any;
tic:any;

_id;
id;
idd;
uid;

  users: User[] = [];
  
  
  ngOnInit() {

    var userid= localStorage.getItem('username');
    var uid = userid.replace(/\"/g, "");

    this.model.uuid = uid; 
    console.log(uid);
    this.auservice.getUserAssignTickets(uid).subscribe(book => { 
      console.log(book);
      this.book = book});
      

}
ticketinfo(_id){
  //alert(_id);
  this.showHide = !this.showHide;
  this.showHidee = !this.showHidee;
 
this._id = _id;
 
  this.auservice.ticinfo(this._id).subscribe(
    tickett => {
         
          console.log(tickett); 
           this.tickett = tickett; }
      );
      

}
ticketdelete(_id){
  //alert(_id);
  this.userService.delete(_id).subscribe( res => { 
    console.log(res);
    this.router.navigate(['/addaccount']);
  
  });
}

ticketupdate(_id){
  
  this.idd = _id;
 let ticket={
   status:this.model.status,
   
 }

 let st = this.model.status;
 let pr = this.model.priority;
        alert(this.idd);
  this.auservice.update(this.idd,st,pr).subscribe( res => { 
   // console.log(res);
    //this.router.navigate(['/addaccount']);
    alert("Ticket Updated");
  
  });
}


ticketopen(id){
  
  this.router.navigate(["/useropen"]);

  }
  ticketpending(id){
    this.router.navigate(['/userpending']);
     }
     ticketclose(){
      this.router.navigate(['/userclose']);
     }

}
