/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type TypographyTableContainerVariant = {
  
}

type TypographyTableContainerVariantMap = {
  [key in keyof TypographyTableContainerVariant]: Array<TypographyTableContainerVariant[key]>
}

export type TypographyTableContainerVariantProps = {
  [key in keyof TypographyTableContainerVariant]?: ConditionalValue<TypographyTableContainerVariant[key]>
}

interface TypographyTableContainerRecipe {
  __type: TypographyTableContainerVariantProps
  (props?: TypographyTableContainerVariantProps): string
  raw: (props?: TypographyTableContainerVariantProps) => TypographyTableContainerVariantProps
  variantMap: TypographyTableContainerVariantMap
  variantKeys: Array<keyof TypographyTableContainerVariant>
  splitVariantProps<Props extends TypographyTableContainerVariantProps>(props: Props): [TypographyTableContainerVariantProps, Pretty<DistributiveOmit<Props, keyof TypographyTableContainerVariantProps>>]
}

/** Typography - table container style */
export declare const typographyTableContainer: TypographyTableContainerRecipe