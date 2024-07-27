import { Injectable } from '@nestjs/common';
import { db } from '../../db'
import { getDatesInRange } from '../../utils/dates'

@Injectable()
export class PriceService {
  searchPrice(ticker: string, from: string, to: string): { timestamp: string, close: string }[] {
    const table = db[ticker]['Time Series (Daily)']

    const dates = getDatesInRange(from, to)
    const res = dates.map(date => {
      if (table[date]) {
        return { timestamp: date, close: table[date]["4. close"] }
      }
    }).filter(el => el != null)

    return res;
  }
}
