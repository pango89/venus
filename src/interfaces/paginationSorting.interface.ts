import { ColumnOrder } from '../configurations/constant';

export interface SortColumnsCondition {
  column: string;
  order: ColumnOrder;
}

export interface SortDetail {
  columns: string[];
  columnOrders: ColumnOrder[];
  entityName: string;
  defaultColumn: string;
}
