import { Customer } from "./interfaces/customer-protocol";

export class IndividualCustomer implements Customer {
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;

    constructor(
        firstName: string,
        lastName: string,
        cpf: string,
        cnpj: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = cnpj;
    }
}

export class EnterpriseCustomer implements Customer {
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;

    constructor(
        firstName: string,
        lastName: string,
        cpf: string,
        cnpj: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = "";
    }
}
