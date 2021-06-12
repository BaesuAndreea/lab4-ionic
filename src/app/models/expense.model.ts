
import { IonDatetime } from "@ionic/angular";

export class Expense {
    id: number;
    name: string = '';
    description: string = '';
    sum: number;
    date: IonDatetime;
    location: string;
    currency: string;
    type: Type;
}
export enum Type{
        food,
        utilities,
        transportation,
        outing,
        groceries,
        clothes,
        electronics,
        other,
}
export const TYPES = [
 'Food', 
 'Utilities',
 'Transportation', 
 'Outing',
 'Groceries',
 'Clothes',
 'Electronics',
 'Other'

];