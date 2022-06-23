export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    street: string;
    zipcode: number;
    city: string;
    phoneNumber: string;
    mail: string;

    constructor(customer) {
        //console.log('Customer::constructor() called.');
        this.id = customer.id;
        this.firstName = customer.firstName;
        this.lastName = customer.lastName;
        this.street = customer.street;
        this.zipcode = customer.zipcode;
        this.city = customer.city;
        this.phoneNumber = customer.phoneNumber;
        this.mail = customer.mail;
    }

    get name() {
        //console.log('Customer::get name() called.');
        let name = '';

        if (this.firstName && this.lastName) {
            name = this.firstName + ' ' + this.lastName;
        } else if (this.firstName) {
            name = this.firstName;
        } else if (this.lastName) {
            name = this.lastName;
        }

        return name;
    }

    set name(value) {
        //console.log('Customer::set name() called.');
    }

    get address() {
        //console.log('Customer::get address() called.');
        return `${this.street}, ${this.zipcode} ${this.city}`;
    }

    set address(value) {
        //console.log('Customer::set address() called.');
    }
}
