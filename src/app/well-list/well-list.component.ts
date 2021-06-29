import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  wellData = [
    { name: 'pradeep', type: 'esp', key: 100 },
    { name: 'Vihan', type: 'lsp', key: 100 },
    { name: 'Divith', type: 'esp', key: 101 },
    { name: 'Tanisha', type: 'lsp', key: 100 },
    { name: 'Vicky', type: 'easdsp', key: 101 },

  ]
  currentKey = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getClass(priority: any) {
    return {
      'red': priority == 'esp',
      'green': priority == 'lsp',
      'blue': priority == 'asd'
    }

  }

  getStyleClass
    (priority: any) {
    return {
      'aaa': priority == 'esp',
      'bbb': priority == 'lsp',
      'ccc': priority == 'asd'
    }

    
  }
  getKey(key:any):void{
    this.currentKey = key
  }

  newWellData(value:any){
    this.wellData.push(value)
  }
}
