export class Car {
    constructor(
      public carID: string,
      public carModel: string,
      public carBrand: string,
      public basePricePerDay: number,
      public isAvailable: boolean = true
    ) {}
  
    calculatePrice(rentalDays: number): number {
      return this.basePricePerDay * rentalDays;
    }
  
    rent(): void {
      this.isAvailable = false;
    }
  
    returnCar(): void {
      this.isAvailable = true;
    }
  }
  