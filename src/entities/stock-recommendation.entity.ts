import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class StockRecommendation {
  @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
  public id?: number;

  @Column({ name: 'strategy', type: 'varchar', length: 100 })
  public strategy: string;

  @Column({ name: 'symbol', type: 'varchar', length: 50 })
  public symbol: string;

  @Column({ name: 'horizon', type: 'varchar', length: 30 })
  public horizon: string;

  @Column({ name: 'buy_date', type: 'timestamp' })
  public buyDate: Date;

  @Column({ name: 'buy_price', type: 'decimal' })
  public buyPrice: number;

  @Column({ name: 'target_price', type: 'decimal' })
  public targetPrice: number;

  @Column({ name: 'sell_date', type: 'timestamp' })
  public sellDate: Date;

  @Column({ name: 'sell_price', type: 'decimal' })
  public sellPrice: number;

  @Column({ name: 'days', type: 'integer' })
  public days: number;

  @Column({ name: 'gain_percent', type: 'decimal' })
  public gainPercent: number;

  @Column({ name: 'status', type: 'varchar', length: 20 })
  public status: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  public created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  public updated_at: Date;
}
