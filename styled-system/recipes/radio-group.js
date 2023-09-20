import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const radioGroupDefaultVariants = {
  "size": "md"
}
const radioGroupCompoundVariants = []

const radioGroupSlotNames = [
  [
    "root",
    "radioGroup__root"
  ],
  [
    "label",
    "radioGroup__label"
  ],
  [
    "radio",
    "radioGroup__radio"
  ],
  [
    "radioLabel",
    "radioGroup__radioLabel"
  ],
  [
    "radioControl",
    "radioGroup__radioControl"
  ],
  [
    "indicator",
    "radioGroup__indicator"
  ]
]
const radioGroupSlotFns = radioGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, radioGroupDefaultVariants, getSlotCompoundVariant(radioGroupCompoundVariants, slotName))])

const radioGroupFn = (props = {}) => {
  return Object.fromEntries(radioGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const radioGroupVariantKeys = [
  "size"
]

export const radioGroup = Object.assign(radioGroupFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: radioGroupVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, radioGroupVariantKeys)
  },
})