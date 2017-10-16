import { Component, OnInit } from '@angular/core';

class Car {
  vin?: string;
  year?: number;
  brand?: string;
  color?: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayDialog: boolean;

  car: Car = new PrimeCar();

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  constructor() { }

  ngOnInit() {
    this.cars = [
      { vin: 'A1', year: 1, brand: 'A1', color: 'A1' },
      { vin: 'A2', year: 2, brand: 'A2', color: 'A2' },
      { vin: 'A3', year: 3, brand: 'A3', color: 'A3' },
      { vin: 'A4', year: 4, brand: 'A4', color: 'A4' }
    ]
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.findSelectedCarIndex()] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.findSelectedCarIndex();
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }


}

class PrimeCar implements Car {

  constructor(public vin?, public year?, public brand?, public color?) { }
}
