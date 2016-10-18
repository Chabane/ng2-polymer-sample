import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  parentId: number;
  children: Person[];
  isOpened: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
