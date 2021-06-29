import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  showTable = true;
  users= [
    {name:'pradeep',age:26},
    {name:'Vicky',age:24},
    {name:'Rakesh',age:29},
    {name:'Ganesh',age:30},
    {name:'Vijaya',age:33},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  showUser(data:boolean):void{
    this.showTable = !data
  }

}
