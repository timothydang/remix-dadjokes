/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type TableCellVariant = {
  
}

type TableCellVariantMap = {
  [key in keyof TableCellVariant]: Array<TableCellVariant[key]>
}

export type TableCellVariantProps = {
  [key in keyof TableCellVariant]?: ConditionalValue<TableCellVariant[key]>
}

interface TableCellRecipe {
  __type: TableCellVariantProps
  (props?: TableCellVariantProps): string
  raw: (props?: TableCellVariantProps) => TableCellVariantProps
  variantMap: TableCellVariantMap
  variantKeys: Array<keyof TableCellVariant>
  splitVariantProps<Props extends TableCellVariantProps>(props: Props): [TableCellVariantProps, Pretty<DistributiveOmit<Props, keyof TableCellVariantProps>>]
}

/** Styles for the TableCell component */
export declare const tableCell: TableCellRecipe