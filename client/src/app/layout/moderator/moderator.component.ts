import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent implements OnInit {

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
