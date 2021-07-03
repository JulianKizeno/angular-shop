import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'angular-store';

  items = ['Julian', 'John', 'Zaira', 'Caro']

  power = 10

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.items.push('Nuevo nombre')
  }

  deleteItem(idx: number){
    this.items.splice(idx, 1)
  }

}
