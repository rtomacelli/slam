import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

    openNav() {
      $("#mySidenav").css("display", "block");
    }

    closeNav() {
      $("#mySidenav").css("display", "none");
    }

}