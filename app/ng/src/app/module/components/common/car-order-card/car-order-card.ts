import {Component, Input, OnInit} from '@angular/core';

export interface CarOrderCardInterface {
  brand: string;
  img: string;
  address: string;
  bookingBadge: string;
  tags?: (string)[] | null;
  region: string;
  dealerTitle: string;
  specifications: string;
  model: string;
  equipment: string;
  color: Color;
  allOptions: AllOptions;
  views: string;
  price: string;
  lowerPrice: string;
  localInformationMapOptions: LocalInformationMapOptions;
  localInformation: LocalInformation;
}
export interface Color {
  name: string;
  borderColor: string;
  backgroundColor: string;
}
export interface AllOptions {
  count: string;
  url: string;
}
export interface LocalInformation {
  dealerTitle: string;
}
export interface LocalInformationMapOptions {
  dealerTitle: string;
  address: string;
  operatingMode: string;
  center: MapCenter;
}
export interface MapCenter {
  dealerTitle: string;
}


@Component({
  selector: 'app-car-order-card',
  templateUrl: './car-order-card.component.html'
})
export class CarOrderCard implements OnInit {

  @Input() currentAuto!: CarOrderCardInterface;

  constructor() { }

  ngOnInit(): void {

  }

}
