import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const collapsibleDefaultVariants = {}
const collapsibleCompoundVariants = []

const collapsibleSlotNames = [
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ]
]
const collapsibleSlotFns = collapsibleSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, collapsibleDefaultVariants, getSlotCompoundVariant(collapsibleCompoundVariants, slotName))])

const collapsibleFn = (props = {}) => {
  return Object.fromEntries(collapsibleSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const collapsibleVariantKeys = []

export const collapsible = Object.assign(collapsibleFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: collapsibleVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, collapsibleVariantKeys)
  },
})