import { Item } from "./item";

export interface CartItem {
    [id: string]: ItemWithAmount 
}

export interface ItemWithAmount {
    item: Item
    amount: number


}