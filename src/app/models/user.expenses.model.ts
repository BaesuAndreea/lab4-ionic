import { IonDatetime } from "@ionic/angular";
import { Expense } from "./expense.model";

export class UserExpense {
    id: number;
    expenseId: number;
    expense: Expense;
    percent: number;
}