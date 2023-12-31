/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type AlertTitleVariant = {
  
}

type AlertTitleVariantMap = {
  [key in keyof AlertTitleVariant]: Array<AlertTitleVariant[key]>
}

export type AlertTitleVariantProps = {
  [key in keyof AlertTitleVariant]?: ConditionalValue<AlertTitleVariant[key]>
}

interface AlertTitleRecipe {
  __type: AlertTitleVariantProps
  (props?: AlertTitleVariantProps): string
  raw: (props?: AlertTitleVariantProps) => AlertTitleVariantProps
  variantMap: AlertTitleVariantMap
  variantKeys: Array<keyof AlertTitleVariant>
  splitVariantProps<Props extends AlertTitleVariantProps>(props: Props): [AlertTitleVariantProps, Pretty<DistributiveOmit<Props, keyof AlertTitleVariantProps>>]
}

/** Styles for the AlertTitle component */
export declare const alertTitle: AlertTitleRecipe