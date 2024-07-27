import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { PriceService } from './price.service';
import { GetPriceDto } from './dto/get-price.dto'
import { isFromDateLessThanToDate } from '../../utils/dates'

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  getPrice(@Query() query: GetPriceDto): { timestamp: string, close: string }[] {
    const {ticker, from, to} = query

    if(!isFromDateLessThanToDate(from, to)) {
      throw new BadRequestException('FROM date should be less then TO date')
    }

    return this.priceService.searchPrice(ticker, from, to);
  }
}
