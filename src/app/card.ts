import { CardType } from './cardType';
import { Customer} from './customer';

export class Card{
    cardNumber:string;
    validTill:Date;
    usedLimit:number;
    remainingLimit:number;
    cardType:CardType;
    customer:Customer;

    constructor(cardNnumber:string,validTill:Date,usedLimit:number,remainingLimit:number,cardType:CardType,customer:Customer){
        this.cardNumber=cardNnumber;
        this.validTill=validTill;
        this.usedLimit=usedLimit;
        this.remainingLimit=remainingLimit;
        this.cardType=cardType;
        this.customer=customer;
    }


}
