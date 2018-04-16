import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
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
