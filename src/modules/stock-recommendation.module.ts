import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockRecommendation } from '../entities/stock-recommendation.entity';
import { StockRecommendationController } from '../controllers/stock-recommendation.controller';
import { StockRecommendationService } from '../services/stock-recommendation.service';
import { StockRecommendationRepository } from '../repositories/stock-recommendation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StockRecommendation])],
  controllers: [StockRecommendationController],
  providers: [StockRecommendationService, StockRecommendationRepository],
  exports: [],
})
export class StockRecommendationModule {}
