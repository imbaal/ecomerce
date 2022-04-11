export interface WalletCustomer{
    id:number;
    customer_id:number
    balance:number
    created_by:string
    created_on:Date
    nominal:number
}

export interface DefaultNominal{
    id:number;
    nominal:number
}

export interface Iqbal{
    id:number;
    customer_id:string;
    card_number:string;
    validity_period: Date;
    cvv : string;
    created_by: string
    created_on: Date;
    modified_on: Date
    modified_by: number

}

export interface CustomNominal{
    id:number
    customer_id:number
    nominal:number
}

export interface Customer{
    id:number
}