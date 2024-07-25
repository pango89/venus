import { ColumnOrder, TableToColumnMapping } from '../configurations/constant';
import {
  SortDetail,
  SortColumnsCondition,
} from '../interfaces/paginationSorting.interface';

export function fillNull<T>(a: T[]): T[] {
  if (a.length == 0) return [null];
  return a;
}

export class RepoUtils {
  private static generateOrderBy(
    sortColumnConditions: SortColumnsCondition[],
  ): any {
    if (sortColumnConditions == undefined) return {};

    let orderBy = {};
    sortColumnConditions.forEach(
      (sc) => (orderBy = { ...orderBy, [sc.column]: sc.order }),
    );

    return orderBy;
  }

  public static getOrderBy(sortDetail: SortDetail): any {
    const sortColumnConditions: SortColumnsCondition[] = [];

    if (!sortDetail.columns?.length) {
      sortColumnConditions.push({
        column: sortDetail.defaultColumn,
        order: ColumnOrder.ASC,
      });
    } else
      for (let i = 0; i < sortDetail.columns.length; i++) {
        const cols =
          TableToColumnMapping[sortDetail.entityName][sortDetail.columns[i]];
        const order = sortDetail.columnOrders[i] ?? ColumnOrder.ASC;
        cols?.forEach((col) => {
          sortColumnConditions.push({
            column: col,
            order: order,
          });
        });
      }
    const orderBy = this.generateOrderBy(sortColumnConditions);
    return orderBy;
  }
}
