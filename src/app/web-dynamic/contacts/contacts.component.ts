import { Component, OnInit } from '@angular/core';

class Car {
  vin?: string;
  year?: number;
  brand?: string;
  color?: string;
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

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayDialog: boolean;

  selectedCar: Contacts;

  newCar: boolean;

  contact: Contacts;

  contacts: Contacts[];

  constructor() { }

  ngOnInit() {
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
    this.contact = this.resetContactsObj();
    this.displayDialog = true;
  }

  save() {
    const contacts = [...this.contacts];
    if (this.newCar) {
      contacts.push(this.contact);
    } else {
      contacts[this.findSelectedCarIndex()] = this.contact;
    }

    this.contacts = contacts;
    this.contact = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedCarIndex();
    this.contacts = this.contacts.filter((val, i) => i !== index);
    this.contact = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.contact = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Contacts): Contacts {
    const contact = this.resetContactsObj();
    for (let prop in c) {
      contact[prop] = c[prop];
    }
    return contact;
  }

  findSelectedCarIndex(): number {
    return this.contacts.indexOf(this.selectedCar);
  }

  resetContactsObj(): Contacts {
    return {
      id: 0, firstName: '',
      middelName: '',
      lastName: '',
      primaryContactNumber: null,
      secondaryContactNumber: null,
      email: '',
      street: '',
      buildingName: '',
      area: '',
      city: '',
      pinCode: null,
      country: ''
    };
  }

}
