/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type AlertDialogVariant = {
  
}

type AlertDialogVariantMap = {
  [key in keyof AlertDialogVariant]: Array<AlertDialogVariant[key]>
}

export type AlertDialogVariantProps = {
  [key in keyof AlertDialogVariant]?: ConditionalValue<AlertDialogVariant[key]>
}

interface AlertDialogRecipe {
  __type: AlertDialogVariantProps
  (props?: AlertDialogVariantProps): Pretty<Record<"root" | "trigger" | "portal" | "overlay" | "content" | "header" | "footer" | "title" | "description" | "action" | "cancel", string>>
  raw: (props?: AlertDialogVariantProps) => AlertDialogVariantProps
  variantMap: AlertDialogVariantMap
  variantKeys: Array<keyof AlertDialogVariant>
  splitVariantProps<Props extends AlertDialogVariantProps>(props: Props): [AlertDialogVariantProps, Pretty<DistributiveOmit<Props, keyof AlertDialogVariantProps>>]
}

/** Styles for the AlertDialog component */
export declare const alertDialog: AlertDialogRecipe