export interface Person {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface EmploymentDetails {
  companyName: string;
  designation: string;
  salary: number;
}

export interface Applicant {
  person: Person;
  address: Address;
}

export interface Guarantor {
  person: Person;
  address: Address;
}

export interface Loan {
  applicant: Applicant;
  spouse: Applicant;
  guarantors: Guarantor[];
  employmentDetails: EmploymentDetails;
}
