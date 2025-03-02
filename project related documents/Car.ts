export class Car{

    carId: number;
    carBrand: String;
    carModel: String;
    basedPrice: number;
    isAvailable: boolean;

    constructor(carBrand: string, carModel: string, basedPrice: number){

        this.carBrand = carBrand;
        this.carModel = carModel;
        this.basedPrice = basedPrice;
        this.isAvailable = true;

    }

    calculatePrice(days: number): number {

        return this.basedPrice * days;

    }

    rentCar(): void {

        this.isAvailable = false;
    }

    returnCar(): void {
        
        this.isAvailable = true;
    }
}