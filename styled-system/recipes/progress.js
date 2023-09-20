import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const progressDefaultVariants = {}
const progressCompoundVariants = []

const progressSlotNames = [
  [
    "root",
    "progress__root"
  ],
  [
    "indicator",
    "progress__indicator"
  ]
]
const progressSlotFns = progressSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, progressDefaultVariants, getSlotCompoundVariant(progressCompoundVariants, slotName))])

const progressFn = (props = {}) => {
  return Object.fromEntries(progressSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const progressVariantKeys = []

export const progress = Object.assign(progressFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: progressVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, progressVariantKeys)
  },
})