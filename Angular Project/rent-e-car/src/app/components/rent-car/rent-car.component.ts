import { Component, OnInit } from "@angular/core";
import { CarRentalService } from "../../services/car-rental.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-rent-car",
  imports: [FormsModule],
  templateUrl: "./rent-car.component.html",
})
export class RentCarComponent implements OnInit {
  customerName: string = "";
  carID: string = "";
  rentalDays: number = 1;
  availableCars: any[] = []; // Initialize as an empty array

  constructor(private carRentalService: CarRentalService) {}

  ngOnInit(): void {
    this.availableCars = this.carRentalService.getAvailableCars();
  }

  rentCar(): void {
    if (this.carRentalService.rentCar(this.carID, this.customerName, this.rentalDays)) {
      alert("Car rented successfully!");
      this.availableCars = this.carRentalService.getAvailableCars();
    } else {
      alert("Car is not available.");
    }
  }
}
