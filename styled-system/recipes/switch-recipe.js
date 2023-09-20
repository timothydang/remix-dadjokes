import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const switchRecipeDefaultVariants = {
  "size": "md"
}
const switchRecipeCompoundVariants = []

const switchRecipeSlotNames = [
  [
    "root",
    "switchRecipe__root"
  ],
  [
    "label",
    "switchRecipe__label"
  ],
  [
    "control",
    "switchRecipe__control"
  ],
  [
    "thumb",
    "switchRecipe__thumb"
  ]
]
const switchRecipeSlotFns = switchRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchRecipeDefaultVariants, getSlotCompoundVariant(switchRecipeCompoundVariants, slotName))])

const switchRecipeFn = (props = {}) => {
  return Object.fromEntries(switchRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const switchRecipeVariantKeys = [
  "size"
]

export const switchRecipe = Object.assign(switchRecipeFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: switchRecipeVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, switchRecipeVariantKeys)
  },
})