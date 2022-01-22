import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public data: any;

  constructor() {
    this.data = [
      { firstName: 'John', lastName: 'Doe', age: '35' },
      { firstName: 'Michael', lastName: 'Smith', age: '39' },
      { firstName: 'Michael', lastName: 'Jordan', age: '45' },
      { firstName: 'Tanya', lastName: 'Blake', age: '47' }
    ];
  }

  ngOnInit(): void {
  }

}
