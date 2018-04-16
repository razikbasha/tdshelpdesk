import { Component, OnInit,Input,Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../../_services/index';
import { LoginComponent } from '../../../login/login.component';
import { AlertService, UserService } from '../../../_services/index';
import { User, Book, Group} from '../../../_models/index';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    book: Book[] = [];
    pushRightClass: string = 'push-right';
    username:string;
    constructor(private userService: UserService,private translate: TranslateService, public router: Router,
    public auth:AuthenticationService
    ) {
        var name= localStorage.getItem('username');
        this.username = name.replace(/\"/g, "");
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this.userService.getAllTicketsnew().subscribe(book =>  { 
            console.log("header ......");
            console.log(book);
            this.book = book; });
    }

    ngOnInit() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('.main-container-head').toggleClass('active');
            });
            $('.clickOpen').click(function(){
                $('.main-container-head').removeClass('active');
            });
        });
        
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
