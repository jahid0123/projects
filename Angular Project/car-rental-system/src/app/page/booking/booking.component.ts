import { OnInit } from "@angular/core";
import { Book, Car } from "../../app.component";

export class BookComponent implements OnInit {
  availableCars: Car[] = [];
  selectedCar: Car | null = null;  // Will hold the selected car object
  customerName = '';
  customerIdentity = 0;
  customerContact = 0;
  days = 1;
  totalAmount = 0;
  bookingConfirmed = false;

  ngOnInit(): void {
    let allCar = JSON.parse(localStorage.getItem('car') || '[]');
    // Filter cars where isAvailable is true (boolean or string comparison)
    this.availableCars = allCar.filter((car: { isAvailable: string | boolean; }) => car.isAvailable === true || car.isAvailable === 'true');
  }

  onCarSelect(car: Car): void {
    this.selectedCar = car;
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    if (this.selectedCar) {
      this.totalAmount = this.selectedCar.carBasePrice * this.days;
    }
  }

  bookCar(): void {
    if (!this.selectedCar || !this.customerName || !this.customerIdentity || !this.customerContact || !this.days) {
      alert('Please fill out all fields and select a car');
      return;
    }

    // Create the booking object
    const newBooking = new Book(
      this.selectedCar,
      this.customerName,
      this.customerIdentity,
      this.customerContact,
      this.days
    );

    // Confirm the booking
    const confirmBooking = confirm(`Confirm booking?\nTotal Amount: $${this.totalAmount}`);

    if (confirmBooking) {
      // Update car availability
      this.selectedCar.isAvailable = false;

      // Save the updated car list in localStorage
      localStorage.setItem('cars', JSON.stringify(this.availableCars));

      // Retrieve previous bookings or initialize empty array
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push(newBooking);

      // Save the new booking in localStorage
      localStorage.setItem('bookings', JSON.stringify(bookings));

      alert('Booking confirmed!');
      this.bookingConfirmed = true;
    }
  }
}
