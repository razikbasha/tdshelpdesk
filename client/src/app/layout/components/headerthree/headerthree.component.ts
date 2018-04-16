import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-headerthree',
  templateUrl: './headerthree.component.html',
  styleUrls: ['./headerthree.component.scss']
})
export class HeaderthreeComponent implements OnInit {

  pushRightClass: string = 'push-right';
username:string;
  constructor(private translate: TranslateService, public router: Router) {
    var name= localStorage.getItem('username');this.username = name.replace(/\"/g, "");
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
  }

  ngOnInit() {}

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
