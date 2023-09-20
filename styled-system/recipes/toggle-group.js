import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const toggleGroupDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const toggleGroupCompoundVariants = []

const toggleGroupSlotNames = [
  [
    "root",
    "toggleGroup__root"
  ],
  [
    "toggle",
    "toggleGroup__toggle"
  ]
]
const toggleGroupSlotFns = toggleGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toggleGroupDefaultVariants, getSlotCompoundVariant(toggleGroupCompoundVariants, slotName))])

const toggleGroupFn = (props = {}) => {
  return Object.fromEntries(toggleGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const toggleGroupVariantKeys = [
  "variant",
  "size"
]

export const toggleGroup = Object.assign(toggleGroupFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: toggleGroupVariantKeys,
  variantMap: {
  "variant": [
    "outline",
    "ghost"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, toggleGroupVariantKeys)
  },
})