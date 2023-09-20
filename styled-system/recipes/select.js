import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const selectDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const selectCompoundVariants = []

const selectSlotNames = [
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "value",
    "select__value"
  ]
]
const selectSlotFns = selectSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectDefaultVariants, getSlotCompoundVariant(selectCompoundVariants, slotName))])

const selectFn = (props = {}) => {
  return Object.fromEntries(selectSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const selectVariantKeys = [
  "variant",
  "size"
]

export const select = Object.assign(selectFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: selectVariantKeys,
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
    return splitProps(props, selectVariantKeys)
  },
})