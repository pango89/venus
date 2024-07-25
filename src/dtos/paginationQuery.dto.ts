import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ColumnOrder } from '../configurations/constant';

export class PaginationQueryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  public offset?: number = 0;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  public limit?: number = 20;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  @Type(() => String)
  columns?: string[];

  @IsOptional()
  @IsArray()
  @IsEnum(ColumnOrder, { each: true })
  @ApiProperty({ type: [ColumnOrder] })
  columnOrders?: ColumnOrder[];
}
