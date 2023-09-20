import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const menuDefaultVariants = {
  "size": "md"
}
const menuCompoundVariants = []

const menuSlotNames = [
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "optionItem",
    "menu__optionItem"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ]
]
const menuSlotFns = menuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, menuDefaultVariants, getSlotCompoundVariant(menuCompoundVariants, slotName))])

const menuFn = (props = {}) => {
  return Object.fromEntries(menuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const menuVariantKeys = [
  "size"
]

export const menu = Object.assign(menuFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: menuVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, menuVariantKeys)
  },
})