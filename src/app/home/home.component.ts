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
  people: Person[] = [];
  @ViewChild("grid")
  grid: any;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    var grid = this.grid.nativeElement;
    this.people = [{
      id: 1, firstName: "name", lastName: "prenom", email: "email", parentId: null, isOpened: false,
      children: [
        {
          id: 3, firstName: "name1", lastName: "prenom2", email: "email3", parentId: 1, isOpened: false, children: [
            { id: 4, firstName: "name1", lastName: "prenom2", email: "email3", parentId: 3, isOpened: false, children: null }
          ]
        }
      ]
    },
      {
        id: 2, firstName: "name", lastName: "prenom", email: "email", parentId: null, children: [
          {
            id: 5, firstName: "dd", lastName: "dd", email: "dd", parentId: 2, isOpened: false, children: [
              { id: 6, firstName: "cc", lastName: "cc", email: "cc", parentId: 5, isOpened: false, children: null }
            ]
          }
        ], isOpened: false
      }];
  }

  onchange(event: any) {
    const grid = event.target;
    var selected = grid.selection.selected();
    if (selected.length == 1) {
      var index = selected[0];
      let currentPerson = this.people[index];
      // if the selected row has a children
      if (currentPerson.children) {
        // if row is closed, insert the children
        if (!this.people[index].isOpened) {
          this.people.splice.apply(this.people, [(index + 1), 0].concat(currentPerson.children));
        } else {
          // if row is already opened, then remove all chidren recursively
          this.removeChildren(currentPerson.id);
        }
        currentPerson.isOpened = !currentPerson.isOpened;
      }
    }
  }

  // remove all children of node
  removeChildren(id: number) {
    this.people.forEach((item, i) => {
      if (item.parentId === id) {
        this.people.splice(i, 1);
        this.removeChildren(item.id);
      }
    });
  }
}
