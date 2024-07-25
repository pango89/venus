import { Injectable, Logger } from '@nestjs/common';
import { StockRecommendation } from '../entities/stock-recommendation.entity';
import { StockRecommendationRepository } from '../repositories/stock-recommendation.repository';
import { RepoUtils } from '../utils/repository';
import { ColumnOrder } from '../configurations/constant';
import { PaginatedResponse } from '../dtos/paginatedResponse.dto';

@Injectable()
export class StockRecommendationService {
  private logger: Logger = new Logger('StockRecommendationService');

  constructor(
    private readonly stockRecommendationRepository: StockRecommendationRepository,
  ) {}

  public async getByStatus({
    status,
    limit = 10,
    offset = 0,
  }: {
    status: string;
    limit?: number;
    offset?: number;
  }): Promise<PaginatedResponse<StockRecommendation>> {
    try {
      const orderBy = RepoUtils.getOrderBy({
        columns: ['created_at'],
        columnOrders: [ColumnOrder.DESC],
        entityName: 'stock_recommendation',
        defaultColumn: 'id',
      });

      const paginatedResponse: PaginatedResponse<StockRecommendation> =
        await this.stockRecommendationRepository.get({
          filterBy: {
            status,
          },
          skip: offset,
          take: limit,
          orderBy,
        });

      return paginatedResponse;
    } catch (error) {
      throw error;
    }
  }
}
