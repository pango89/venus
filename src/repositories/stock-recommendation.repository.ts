/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { PaginatedResponse } from '../dtos/paginatedResponse.dto';
import { StockRecommendation } from '../entities/stock-recommendation.entity';
// import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StockRecommendationRepository extends Repository<StockRecommendation> {
  constructor(dataSource: DataSource) {
    super(StockRecommendation, dataSource.createEntityManager());
  }

  public async get({
    filterBy,
    skip = 0,
    take = 10,
    orderBy,
  }: {
    filterBy?: any;
    skip?: number;
    take?: number;
    orderBy?: any;
  }): Promise<PaginatedResponse<StockRecommendation>> {
    const { status } = filterBy;
    const [stockRecommendations, count] = await this.findAndCount({
      where: [
        {
          status: status,
        },
      ],
      take,
      skip,
      order: orderBy,
    });

    return new PaginatedResponse(stockRecommendations, count, skip, take);
  }
}
