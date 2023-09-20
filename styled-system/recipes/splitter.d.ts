/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type SplitterVariant = {
  
}

type SplitterVariantMap = {
  [key in keyof SplitterVariant]: Array<SplitterVariant[key]>
}

export type SplitterVariantProps = {
  [key in keyof SplitterVariant]?: ConditionalValue<SplitterVariant[key]>
}

interface SplitterRecipe {
  __type: SplitterVariantProps
  (props?: SplitterVariantProps): Pretty<Record<"root" | "panel" | "resizeTrigger", string>>
  raw: (props?: SplitterVariantProps) => SplitterVariantProps
  variantMap: SplitterVariantMap
  variantKeys: Array<keyof SplitterVariant>
  splitVariantProps<Props extends SplitterVariantProps>(props: Props): [SplitterVariantProps, Pretty<DistributiveOmit<Props, keyof SplitterVariantProps>>]
}

/** A splitter style */
export declare const splitter: SplitterRecipe