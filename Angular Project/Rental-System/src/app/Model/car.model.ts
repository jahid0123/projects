// car.model.ts
export class Car {
  id: number;
  brand: string;
  model: string;
  rentPricePerDay: number;
  isAvailable: boolean; // Add availability flag
  isRented: boolean; // Add isRented flag to track the rental status

  constructor(
    id: number = 0,
    brand: string = '',
    model: string = '',
    rentPricePerDay: number = 0
  ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.rentPricePerDay = rentPricePerDay;
    this.isAvailable = true;  // Default value to available when a car is added
    this.isRented = false;    // Default value, a new car is not rented
  }
}
