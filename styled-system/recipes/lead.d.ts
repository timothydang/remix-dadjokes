/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type LeadVariant = {
  
}

type LeadVariantMap = {
  [key in keyof LeadVariant]: Array<LeadVariant[key]>
}

export type LeadVariantProps = {
  [key in keyof LeadVariant]?: ConditionalValue<LeadVariant[key]>
}

interface LeadRecipe {
  __type: LeadVariantProps
  (props?: LeadVariantProps): string
  raw: (props?: LeadVariantProps) => LeadVariantProps
  variantMap: LeadVariantMap
  variantKeys: Array<keyof LeadVariant>
  splitVariantProps<Props extends LeadVariantProps>(props: Props): [LeadVariantProps, Pretty<DistributiveOmit<Props, keyof LeadVariantProps>>]
}

/** Typography - Lead style */
export declare const lead: LeadRecipe