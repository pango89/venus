import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.VENUS_DB_HOST,
  port: +process.env.VENUS_DB_PORT,
  username: process.env.VENUS_DB_USERNAME,
  password: process.env.VENUS_DB_PASSWORD,
  database: process.env.VENUS_DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*.ts'],
  logging: true,
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
