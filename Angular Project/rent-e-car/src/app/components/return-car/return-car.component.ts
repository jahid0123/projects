import { Component } from "@angular/core";
import { CarRentalService } from "../../services/car-rental.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-return-car",
  imports: [FormsModule],
  templateUrl: "./return-car.component.html",
})
export class ReturnCarComponent {
  carID: string = "";

  constructor(private carRentalService: CarRentalService) {}

  returnCar(): void {
    if (this.carRentalService.returnCar(this.carID)) {
      alert("Car returned successfully!");
    } else {
      alert("Invalid car ID.");
    }
  }
}
