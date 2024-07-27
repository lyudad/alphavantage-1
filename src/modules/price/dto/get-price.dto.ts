import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsString } from 'class-validator';

export enum ETiker {
    GE = 'GE',
    AMZN = 'AMZN',
    AAPL = 'AAPL',
    IBM = 'IBM'
  }

export class GetPriceDto {
    @ApiProperty({
        description: 'Ticker',
        example: 'GE',
      })
    @IsNotEmpty()
    @IsEnum(ETiker)
    ticker: ETiker;

    @ApiProperty({
        description: 'date From',
        example: '2021-10-01',
      })
    @IsNotEmpty()
    @IsString()
    from: string;

    @ApiProperty({
        description: 'date To',
        example: '2021-10-02',
      })
    @IsNotEmpty()
    @IsString()
    to: string;
  }