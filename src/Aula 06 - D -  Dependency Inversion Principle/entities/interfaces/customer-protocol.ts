export interface CustomerOrder {
    getName(): string;
    getIDM(): string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface EnterpriseCustomerProtocol {
    firstName: string;
    cnpj: string;
}
