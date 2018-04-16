import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AlertService, AuthenticationService } from '../_services/index';
//import {HomeComponent} from '../home/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
data:string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        console.log(this.model.username); console.log(this.model.password);
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("after login");
                    console.log(data['role']);

                    localStorage.setItem('username', JSON.stringify(data.fullname));
                    localStorage.setItem('uid',JSON.stringify(data._id));
                    if (data['role'] == "Administrator")   
                    this.router.navigate(['Administrator/dashboard']);

                    else if(data['role'] == "Supporter")
                    this.router.navigate(['/Supporter/dashboard']);


                    else if(data['role'] == "Moderator")
                 this.router.navigate(['/Moderator/dashboard']);
                 else if(data['role'] == "User")
                 this.router.navigate(['/User/dashboard']);
                 else if(data['role'] == "")
                 this.router.navigate(['/login']);
                 
    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
              
    }
}
