import {
    CustomerOrder,
    EnterpriseCustomerProtocol,
    IndividualCustomerProtocol,
} from "./interfaces/customer-protocol";

export class IndividualCustomer
    implements IndividualCustomerProtocol, CustomerOrder
{
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }

    getName(): string {
        return this.firstName + "" + this.lastName;
    }
    getIDM(): string {
        return this.cpf;
    }
}

export class EnterpriseCustomer
    implements EnterpriseCustomerProtocol, CustomerOrder
{
    firstName: string;
    cnpj: string;

    constructor(firstName: string, cnpj: string) {
        this.firstName = firstName;
        this.cnpj = "";
    }

    getName(): string {
        return this.firstName;
    }
    getIDM(): string {
        return this.cnpj;
    }
}
