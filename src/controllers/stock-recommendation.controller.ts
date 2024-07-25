/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  UseGuards,
  ValidationPipe,
  Query,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PaginatedResponse } from '../dtos/paginatedResponse.dto';
import { StockRecommendationService } from '../services/stock-recommendation.service';
import { StockRecommendation } from '../entities/stock-recommendation.entity';

@ApiTags('Stock Recommendation')
@Controller('/stock-recommendation')
export class StockRecommendationController {
  constructor(private stockRecommendationService: StockRecommendationService) {}

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  @Get()
  public async getStockRecommendations(
    @Query(new ValidationPipe({ transform: true }))
    query: {
      status: string;
      offset: number;
      limit: number;
    },
  ): Promise<PaginatedResponse<StockRecommendation>> {
    const { status, limit = 10, offset = 0 } = query;
    return await this.stockRecommendationService.getByStatus({
      status,
      limit: +limit,
      offset: +offset,
    });
  }
}
