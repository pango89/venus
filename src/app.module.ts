import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockRecommendationModule } from './modules/stock-recommendation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.VENUS_DB_HOST,
      port: +process.env.VENUS_DB_PORT,
      username: process.env.VENUS_DB_USERNAME,
      password: process.env.VENUS_DB_PASSWORD,
      database: process.env.VENUS_DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false,
    }),
    HealthModule,
    StockRecommendationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
