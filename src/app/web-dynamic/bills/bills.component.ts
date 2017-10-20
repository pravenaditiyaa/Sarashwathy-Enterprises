import { Component, OnInit } from '@angular/core';
class Item {
  id: number;
  name: string;
  description: string;
  catogry: string;
  type: number;
}
class Contacts {
  id: number;
  firstName: string;
  middelName: string;
  lastName: string;
  primaryContactNumber: number;
  secondaryContactNumber: number;
  email: string;
  street: string;
  buildingName: string;
  area: string;
  city: string;
  pinCode: number;
  country: string;
}
class Bills {
  id: number;
  No: number;
  billDate: Date;
  DueDate: Date;
}
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {


  displayDialog: boolean;

  selectedItem: Item;

  newCar: boolean;

  item: Item;

  items: Item[];

  contacts: Contacts[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        id: 0, name: 'praven',
        description: 'adi',
        catogry: 'K G',
        type: 1234
      }
    ];
    this.contacts = [
      {
        id: 0, firstName: 'praven',
        middelName: 'adi',
        lastName: 'K G',
        primaryContactNumber: 1234,
        secondaryContactNumber: 12324,
        email: 'kg@gmail.com',
        street: 'qweqwe',
        buildingName: 'qweqwe',
        area: 'qweqwe',
        city: 'qweqwe',
        pinCode: 2424,
        country: 'qweqwe'
      }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.item = this.resetContactsObj();
    this.displayDialog = true;
  }

  save() {
    const items = [...this.items];
    if (this.newCar) {
      items.push(this.item);
    } else {
      items[this.findSelectedCarIndex()] = this.item;
    }

    this.items = items;
    this.item = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.items = this.items.filter((val, i) => i !== index);
    this.item = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.item = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Item): Item {
    const item = this.resetContactsObj();
    for (let prop in c) {
      item[prop] = c[prop];
    }
    return item;
  }

  findSelectedCarIndex(): number {
    return this.items.indexOf(this.selectedItem);
  }

  resetContactsObj(): Item {
    return {
      id: 0, name: '',
      description: '',
      catogry: '',
      type: null
    };
  }

}
