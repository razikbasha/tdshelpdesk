import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {}

  ngOnInit() {

      $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
              $('.main-container').toggleClass('active');
          });
          $('.clickOpen').click(function(){
              $('.main-container').removeClass('active');
          });
      });

  }

}
