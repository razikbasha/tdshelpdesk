import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supporter',
  templateUrl: './supporter.component.html',
  styleUrls: ['./supporter.component.scss']
})
export class SupporterComponent implements OnInit {

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




