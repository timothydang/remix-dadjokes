import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const splitterDefaultVariants = {}
const splitterCompoundVariants = []

const splitterSlotNames = [
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ]
]
const splitterSlotFns = splitterSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, splitterDefaultVariants, getSlotCompoundVariant(splitterCompoundVariants, slotName))])

const splitterFn = (props = {}) => {
  return Object.fromEntries(splitterSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const splitterVariantKeys = []

export const splitter = Object.assign(splitterFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: splitterVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, splitterVariantKeys)
  },
})