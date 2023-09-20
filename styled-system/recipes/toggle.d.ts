/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type ToggleVariant = {
  variant: "default" | "outline"
size: "default" | "sm" | "lg"
}

type ToggleVariantMap = {
  [key in keyof ToggleVariant]: Array<ToggleVariant[key]>
}

export type ToggleVariantProps = {
  [key in keyof ToggleVariant]?: ConditionalValue<ToggleVariant[key]>
}

interface ToggleRecipe {
  __type: ToggleVariantProps
  (props?: ToggleVariantProps): string
  raw: (props?: ToggleVariantProps) => ToggleVariantProps
  variantMap: ToggleVariantMap
  variantKeys: Array<keyof ToggleVariant>
  splitVariantProps<Props extends ToggleVariantProps>(props: Props): [ToggleVariantProps, Pretty<DistributiveOmit<Props, keyof ToggleVariantProps>>]
}

/** Styles for the Toggle component */
export declare const toggle: ToggleRecipe