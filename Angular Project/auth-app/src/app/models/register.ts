import { Role } from "./role";

export class Register{    
    email: String;
    password: String;
    role: String;
    firstName: String;
    lastName: String;
   
    phoneNumber: String;

    constructor(email: String, password: String, role: String, firstName: String, lastName: String, phoneNumber: String){

        this.email = email;
        this.password = password;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}