/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type AlertDescriptionVariant = {
  
}

type AlertDescriptionVariantMap = {
  [key in keyof AlertDescriptionVariant]: Array<AlertDescriptionVariant[key]>
}

export type AlertDescriptionVariantProps = {
  [key in keyof AlertDescriptionVariant]?: ConditionalValue<AlertDescriptionVariant[key]>
}

interface AlertDescriptionRecipe {
  __type: AlertDescriptionVariantProps
  (props?: AlertDescriptionVariantProps): string
  raw: (props?: AlertDescriptionVariantProps) => AlertDescriptionVariantProps
  variantMap: AlertDescriptionVariantMap
  variantKeys: Array<keyof AlertDescriptionVariant>
  splitVariantProps<Props extends AlertDescriptionVariantProps>(props: Props): [AlertDescriptionVariantProps, Pretty<DistributiveOmit<Props, keyof AlertDescriptionVariantProps>>]
}

/** Styles for the AlertDescription component */
export declare const alertDescription: AlertDescriptionRecipe