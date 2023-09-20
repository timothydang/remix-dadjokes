/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type PaginationVariant = {
  
}

type PaginationVariantMap = {
  [key in keyof PaginationVariant]: Array<PaginationVariant[key]>
}

export type PaginationVariantProps = {
  [key in keyof PaginationVariant]?: ConditionalValue<PaginationVariant[key]>
}

interface PaginationRecipe {
  __type: PaginationVariantProps
  (props?: PaginationVariantProps): Pretty<Record<"root" | "pageTrigger" | "ellipsis" | "prevPageTrigger" | "nextPageTrigger" | "list" | "listItem", string>>
  raw: (props?: PaginationVariantProps) => PaginationVariantProps
  variantMap: PaginationVariantMap
  variantKeys: Array<keyof PaginationVariant>
  splitVariantProps<Props extends PaginationVariantProps>(props: Props): [PaginationVariantProps, Pretty<DistributiveOmit<Props, keyof PaginationVariantProps>>]
}

/** A pagination style */
export declare const pagination: PaginationRecipe