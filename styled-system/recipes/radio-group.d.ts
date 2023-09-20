/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type RadioGroupVariant = {
  size: "sm" | "md" | "lg"
}

type RadioGroupVariantMap = {
  [key in keyof RadioGroupVariant]: Array<RadioGroupVariant[key]>
}

export type RadioGroupVariantProps = {
  [key in keyof RadioGroupVariant]?: ConditionalValue<RadioGroupVariant[key]>
}

interface RadioGroupRecipe {
  __type: RadioGroupVariantProps
  (props?: RadioGroupVariantProps): Pretty<Record<"root" | "label" | "radio" | "radioLabel" | "radioControl" | "indicator", string>>
  raw: (props?: RadioGroupVariantProps) => RadioGroupVariantProps
  variantMap: RadioGroupVariantMap
  variantKeys: Array<keyof RadioGroupVariant>
  splitVariantProps<Props extends RadioGroupVariantProps>(props: Props): [RadioGroupVariantProps, Pretty<DistributiveOmit<Props, keyof RadioGroupVariantProps>>]
}

/** A radio group style */
export declare const radioGroup: RadioGroupRecipe