/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type DatePickerVariant = {
  
}

type DatePickerVariantMap = {
  [key in keyof DatePickerVariant]: Array<DatePickerVariant[key]>
}

export type DatePickerVariantProps = {
  [key in keyof DatePickerVariant]?: ConditionalValue<DatePickerVariant[key]>
}

interface DatePickerRecipe {
  __type: DatePickerVariantProps
  (props?: DatePickerVariantProps): Pretty<Record<"cellTrigger" | "clearTrigger" | "content" | "control" | "grid" | "input" | "monthSelect" | "nextTrigger" | "positioner" | "prevTrigger" | "rowHeader" | "trigger" | "viewTrigger" | "yearSelect" | "row" | "rowGroup" | "columnHeader", string>>
  raw: (props?: DatePickerVariantProps) => DatePickerVariantProps
  variantMap: DatePickerVariantMap
  variantKeys: Array<keyof DatePickerVariant>
  splitVariantProps<Props extends DatePickerVariantProps>(props: Props): [DatePickerVariantProps, Pretty<DistributiveOmit<Props, keyof DatePickerVariantProps>>]
}

/** A date picker style */
export declare const datePicker: DatePickerRecipe