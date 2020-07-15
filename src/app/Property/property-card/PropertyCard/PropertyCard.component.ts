import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PropertyCard',
  //template: `<h1>I am a card</h1>`,
  templateUrl:'PropertyCard.component.html',
  styleUrls:['PropertyCard.component.css']

})
export class PropertyCardComponent implements OnInit {
  property:any={
    "ID":1,
    "Name":"Inventory",
    "Type":"House",
    "Price":12000
  }
  constructor() { }

  ngOnInit() {
  }

}
