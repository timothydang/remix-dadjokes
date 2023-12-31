import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const contextMenuDefaultVariants = {
  "inset": false
}
const contextMenuCompoundVariants = []

const contextMenuSlotNames = [
  [
    "root",
    "contextMenu__root"
  ],
  [
    "trigger",
    "contextMenu__trigger"
  ],
  [
    "group",
    "contextMenu__group"
  ],
  [
    "portal",
    "contextMenu__portal"
  ],
  [
    "sub",
    "contextMenu__sub"
  ],
  [
    "radioGroup",
    "contextMenu__radioGroup"
  ],
  [
    "subTrigger",
    "contextMenu__subTrigger"
  ],
  [
    "subContent",
    "contextMenu__subContent"
  ],
  [
    "content",
    "contextMenu__content"
  ],
  [
    "item",
    "contextMenu__item"
  ],
  [
    "checkboxItem",
    "contextMenu__checkboxItem"
  ],
  [
    "radioItem",
    "contextMenu__radioItem"
  ],
  [
    "label",
    "contextMenu__label"
  ],
  [
    "separator",
    "contextMenu__separator"
  ],
  [
    "shortcut",
    "contextMenu__shortcut"
  ],
  [
    "itemIndicator",
    "contextMenu__itemIndicator"
  ]
]
const contextMenuSlotFns = contextMenuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, contextMenuDefaultVariants, getSlotCompoundVariant(contextMenuCompoundVariants, slotName))])

const contextMenuFn = (props = {}) => {
  return Object.fromEntries(contextMenuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const contextMenuVariantKeys = [
  "inset"
]

export const contextMenu = Object.assign(contextMenuFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: contextMenuVariantKeys,
  variantMap: {
  "inset": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, contextMenuVariantKeys)
  },
})