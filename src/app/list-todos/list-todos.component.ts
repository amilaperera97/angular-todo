import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

export class Todo {
  constructor (public id: number,public description:string, public done:boolean,public tragetDate:Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
