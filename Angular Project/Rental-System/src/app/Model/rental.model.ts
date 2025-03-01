// rental.model.ts
export class Rental {
    rentalId: number;
    carId: number;
    customerName: string;
    customerAge: number;
    contactNumber: string;
    address: string;
    rentalDays: number;
    totalPrice: number;
    returnDate?: string;
  
    constructor(
      rentalId: number,
      carId: number,
      customerName: string,
      customerAge: number,
      contactNumber: string,
      rentalDays: number,
      totalPrice: number,
      address: string,
      returnDate?: string
    ) {
      this.rentalId = rentalId;
      this.carId = carId;
      this.customerName = customerName;
      this.customerAge = customerAge;
      this.contactNumber = contactNumber;
      this.rentalDays = rentalDays;
      this.totalPrice = totalPrice;
      this.returnDate = returnDate;
      this.address = address;
    }
  }
  