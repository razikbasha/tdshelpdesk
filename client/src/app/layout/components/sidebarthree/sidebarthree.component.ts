import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebarthree',
  templateUrl: './sidebarthree.component.html',
  styleUrls: ['./sidebarthree.component.scss']
})
export class SidebarthreeComponent implements OnInit {

  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  constructor(private translate: TranslateService, public router: Router) {
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

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }
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

  changeLang(language: string) {
      this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }

  ngOnInit() {
      $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
              $('#sidebar').toggleClass('active');
              $('.sidebarButtoncolap').toggleClass('active1');
              $('.sidecollapse').toggleClass('hide');
              $('.nested').removeClass('expand');
          });
          $('.clickOpen').click(function(){
              $('#sidebar').removeClass('active');
              $('.sidebarButtoncolap').removeClass('active1');
              $('.sidecollapse').removeClass('hide');
              //$('.nested').toggleClass('expand');
          });
          
      });

  }

}
