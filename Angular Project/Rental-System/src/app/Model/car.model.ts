// car.model.ts
export class Car {
  id: number;
  brand: string;
  model: string;
  rentPricePerDay: number;
  isAvailable: boolean; // Add availability flag

  constructor(
    id: number,
    brand: string,
    model: string,
    rentPricePerDay: number,
  ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.rentPricePerDay = rentPricePerDay;
    this.isAvailable = true;  // Default value to available when a car is added
  }

  totalPrice (days: number){

    return this.rentPricePerDay * days;

  }


  isAvailable(){
    return

  }
}
