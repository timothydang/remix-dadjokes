/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type FormDescriptionVariant = {
  
}

type FormDescriptionVariantMap = {
  [key in keyof FormDescriptionVariant]: Array<FormDescriptionVariant[key]>
}

export type FormDescriptionVariantProps = {
  [key in keyof FormDescriptionVariant]?: ConditionalValue<FormDescriptionVariant[key]>
}

interface FormDescriptionRecipe {
  __type: FormDescriptionVariantProps
  (props?: FormDescriptionVariantProps): string
  raw: (props?: FormDescriptionVariantProps) => FormDescriptionVariantProps
  variantMap: FormDescriptionVariantMap
  variantKeys: Array<keyof FormDescriptionVariant>
  splitVariantProps<Props extends FormDescriptionVariantProps>(props: Props): [FormDescriptionVariantProps, Pretty<DistributiveOmit<Props, keyof FormDescriptionVariantProps>>]
}

/** Styles for the FormDescription component */
export declare const formDescription: FormDescriptionRecipe