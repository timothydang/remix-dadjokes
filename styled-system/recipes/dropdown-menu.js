import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const dropdownMenuDefaultVariants = {}
const dropdownMenuCompoundVariants = []

const dropdownMenuSlotNames = [
  [
    "root",
    "dropdownMenu__root"
  ],
  [
    "trigger",
    "dropdownMenu__trigger"
  ],
  [
    "group",
    "dropdownMenu__group"
  ],
  [
    "portal",
    "dropdownMenu__portal"
  ],
  [
    "sub",
    "dropdownMenu__sub"
  ],
  [
    "radioGroup",
    "dropdownMenu__radioGroup"
  ],
  [
    "subTrigger",
    "dropdownMenu__subTrigger"
  ],
  [
    "subContent",
    "dropdownMenu__subContent"
  ],
  [
    "content",
    "dropdownMenu__content"
  ],
  [
    "item",
    "dropdownMenu__item"
  ],
  [
    "itemIndicator",
    "dropdownMenu__itemIndicator"
  ],
  [
    "checkboxItem",
    "dropdownMenu__checkboxItem"
  ],
  [
    "radioItem",
    "dropdownMenu__radioItem"
  ],
  [
    "label",
    "dropdownMenu__label"
  ],
  [
    "separator",
    "dropdownMenu__separator"
  ],
  [
    "shortcut",
    "dropdownMenu__shortcut"
  ]
]
const dropdownMenuSlotFns = dropdownMenuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dropdownMenuDefaultVariants, getSlotCompoundVariant(dropdownMenuCompoundVariants, slotName))])

const dropdownMenuFn = (props = {}) => {
  return Object.fromEntries(dropdownMenuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const dropdownMenuVariantKeys = []

export const dropdownMenu = Object.assign(dropdownMenuFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: dropdownMenuVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, dropdownMenuVariantKeys)
  },
})