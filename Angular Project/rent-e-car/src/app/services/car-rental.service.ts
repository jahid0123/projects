import { Injectable } from "@angular/core";
import { Car } from "../model/car";
import { Customer } from "../model/customer";
import { Rental } from "../model/rental";

@Injectable({
  providedIn: "root",
})
export class CarRentalService {
  private cars: Car[] = [];
  private customers: Customer[] = [];
  private rentals: Rental[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem("cars", JSON.stringify(this.cars));
    localStorage.setItem("customers", JSON.stringify(this.customers));
    localStorage.setItem("rentals", JSON.stringify(this.rentals));
  }

  private loadFromLocalStorage(): void {
    this.cars = JSON.parse(localStorage.getItem("cars") || "[]");
    this.customers = JSON.parse(localStorage.getItem("customers") || "[]");
    this.rentals = JSON.parse(localStorage.getItem("rentals") || "[]");
  }

  addCar(car: Car): void {
    this.cars.push(car);
    this.saveToLocalStorage();
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
    this.saveToLocalStorage();
  }

  rentCar(carID: string, customerName: string, days: number): boolean {
    const car = this.cars.find((c) => c.carID === carID && c.isAvailable);
    if (!car) return false;

    car.rent();
    const customer = new Customer("Cus" + (this.customers.length + 1), customerName);
    this.addCustomer(customer);

    this.rentals.push(new Rental(car, customer, days));
    this.saveToLocalStorage();
    return true;
  }

  returnCar(carID: string): boolean {
    const car = this.cars.find((c) => c.carID === carID && !c.isAvailable);
    if (!car) return false;

    car.returnCar();
    this.rentals = this.rentals.filter((r) => r.car.carID !== carID);
    this.saveToLocalStorage();
    return true;
  }

  getAvailableCars(): Car[] {
    return this.cars.filter((car) => car.isAvailable);
  }

  getRentals(): Rental[] {
    return this.rentals;
  }
}
