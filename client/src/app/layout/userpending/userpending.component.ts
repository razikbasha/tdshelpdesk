import { Component, OnInit } from '@angular/core';
import { Book } from '../../_models/index';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpending',
  templateUrl: './userpending.component.html',
  styleUrls: ['./userpending.component.css']
})
export class UserpendingComponent implements OnInit {

  showHide = false;
  showHidee = true;
  showHideee = false;
  tickets:Book[] = [];
  tickett;
  _id;
hid;
comments:any;
model: any = {};
cid;
idd;


  constructor(private router: Router,
    private userService: UserService,
    private auservice: AuthenticationService) { 

    var userid= localStorage.getItem('username');
    var uid = userid.replace(/\"/g, "");
    console.log(uid);
   
      this.auservice.getAlluserpending(uid).subscribe(tickets => { 
      console.log(tickets);
      this.tickets = tickets});
  }

  ngOnInit() {
    var userid= localStorage.getItem('username');
    var uid = userid.replace(/\"/g, "");

    this.model.uuid = uid; 
    
  }

  changeShowStatus(){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    this.showHideee = !this.showHideee;
  }

  ticketinfo(_id){
 
    
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    this._id = _id;
    alert(this._id);
    this.auservice.ticinfo(this._id).subscribe(
      
      tickett => { 
        console.log(tickett);
        this.tickett = tickett; } );
  
     
  
          
          
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
   this.router.navigate(['/useropen']);
    }
    ticketpending(){
      this.router.navigate(['/userpending']);
       }
       ticketclose(){
        this.router.navigate(['/userclose']);
       }

}
