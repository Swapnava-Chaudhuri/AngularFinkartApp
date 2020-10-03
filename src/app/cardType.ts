import { Card } from "./card";


export class CardType{
    cardType:string;
    joiningFees:number;
    creditLimit:number;
    card:Card;


    constructor(cardType:string,joiningFees:number,creditLimit:number,card:Card){
        this.cardType=cardType;
        this.joiningFees=joiningFees;
        this.creditLimit=creditLimit;
        this.card=card
    }

}