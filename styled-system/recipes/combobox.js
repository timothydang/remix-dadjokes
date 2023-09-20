import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const comboboxDefaultVariants = {
  "size": "md"
}
const comboboxCompoundVariants = []

const comboboxSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ]
]
const comboboxSlotFns = comboboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxDefaultVariants, getSlotCompoundVariant(comboboxCompoundVariants, slotName))])

const comboboxFn = (props = {}) => {
  return Object.fromEntries(comboboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const comboboxVariantKeys = [
  "size"
]

export const combobox = Object.assign(comboboxFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: comboboxVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, comboboxVariantKeys)
  },
})