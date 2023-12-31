/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type NavigationMenuVariant = {
  
}

type NavigationMenuVariantMap = {
  [key in keyof NavigationMenuVariant]: Array<NavigationMenuVariant[key]>
}

export type NavigationMenuVariantProps = {
  [key in keyof NavigationMenuVariant]?: ConditionalValue<NavigationMenuVariant[key]>
}

interface NavigationMenuRecipe {
  __type: NavigationMenuVariantProps
  (props?: NavigationMenuVariantProps): Pretty<Record<"root" | "list" | "item" | "trigger" | "content" | "link" | "viewportWrapper" | "viewport" | "indicator", string>>
  raw: (props?: NavigationMenuVariantProps) => NavigationMenuVariantProps
  variantMap: NavigationMenuVariantMap
  variantKeys: Array<keyof NavigationMenuVariant>
  splitVariantProps<Props extends NavigationMenuVariantProps>(props: Props): [NavigationMenuVariantProps, Pretty<DistributiveOmit<Props, keyof NavigationMenuVariantProps>>]
}

/** Styles for the NavigationMenu component */
export declare const navigationMenu: NavigationMenuRecipe