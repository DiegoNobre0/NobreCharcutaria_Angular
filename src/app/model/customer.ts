export interface Customer{
  id?:number;
  client?: string;
  address?: string;
  neighborhood?:string;
  city?:string;
  cep?: string;
  identificationNumber?:string;
  telephone?: string;
  email?: string;
  customerTypeId?: string;
}
