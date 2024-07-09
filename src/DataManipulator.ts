import { ServerRespond } from './DataStreamer';

export interface Row {
  stock: string,
  top_ask_price: number,
  timestamp: Date,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row {
    const priceABC=(serverRespond[0].top_ask.price+serverRespond[0].top_bid.price)/2;
        const priceDEF=(serverRespond[1].top_ask.price+serverRespond[1].top_bid.price)/2;
        const radio=priceABC/priceDEF;
    const upperBound =1+0.05;
    const lower=1-0.05;
    return serverResponds.map((el: any) => {
      return {
        price_abc:priceABC,
        price_def:priceDEF,
        radio,
        timestamp:serverRespond[0].timestamp>serverRespond[1].timestamp?
          upper_bound:upperBound,
          lower_bound:lowerBound,
          trigger_alert:(radio>upperBOUND||radio<lowerBound)?radio:undefined,
        
      };
    }
  }
}
