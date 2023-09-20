/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type CheckboxVariant = {
  size: "sm" | "md" | "lg"
}

type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>
}

export type CheckboxVariantProps = {
  [key in keyof CheckboxVariant]?: ConditionalValue<CheckboxVariant[key]>
}

interface CheckboxRecipe {
  __type: CheckboxVariantProps
  (props?: CheckboxVariantProps): Pretty<Record<"root" | "label" | "control", string>>
  raw: (props?: CheckboxVariantProps) => CheckboxVariantProps
  variantMap: CheckboxVariantMap
  variantKeys: Array<keyof CheckboxVariant>
  splitVariantProps<Props extends CheckboxVariantProps>(props: Props): [CheckboxVariantProps, Pretty<DistributiveOmit<Props, keyof CheckboxVariantProps>>]
}

/** A checkbox style */
export declare const checkbox: CheckboxRecipe