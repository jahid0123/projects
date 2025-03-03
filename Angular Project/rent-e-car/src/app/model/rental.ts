
import { Car } from "./car";
import { Customer } from "./customer";


export class Rental {
  constructor(public car: Car, public customer: Customer, public days: number) {}
}
