/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type CardHeaderVariant = {
  
}

type CardHeaderVariantMap = {
  [key in keyof CardHeaderVariant]: Array<CardHeaderVariant[key]>
}

export type CardHeaderVariantProps = {
  [key in keyof CardHeaderVariant]?: ConditionalValue<CardHeaderVariant[key]>
}

interface CardHeaderRecipe {
  __type: CardHeaderVariantProps
  (props?: CardHeaderVariantProps): string
  raw: (props?: CardHeaderVariantProps) => CardHeaderVariantProps
  variantMap: CardHeaderVariantMap
  variantKeys: Array<keyof CardHeaderVariant>
  splitVariantProps<Props extends CardHeaderVariantProps>(props: Props): [CardHeaderVariantProps, Pretty<DistributiveOmit<Props, keyof CardHeaderVariantProps>>]
}

/** Styles for the CardHeader component */
export declare const cardHeader: CardHeaderRecipe