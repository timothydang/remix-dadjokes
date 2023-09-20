import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const navigationMenuDefaultVariants = {}
const navigationMenuCompoundVariants = []

const navigationMenuSlotNames = [
  [
    "root",
    "navigationMenu__root"
  ],
  [
    "list",
    "navigationMenu__list"
  ],
  [
    "item",
    "navigationMenu__item"
  ],
  [
    "trigger",
    "navigationMenu__trigger"
  ],
  [
    "content",
    "navigationMenu__content"
  ],
  [
    "link",
    "navigationMenu__link"
  ],
  [
    "viewportWrapper",
    "navigationMenu__viewportWrapper"
  ],
  [
    "viewport",
    "navigationMenu__viewport"
  ],
  [
    "indicator",
    "navigationMenu__indicator"
  ]
]
const navigationMenuSlotFns = navigationMenuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, navigationMenuDefaultVariants, getSlotCompoundVariant(navigationMenuCompoundVariants, slotName))])

const navigationMenuFn = (props = {}) => {
  return Object.fromEntries(navigationMenuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const navigationMenuVariantKeys = []

export const navigationMenu = Object.assign(navigationMenuFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: navigationMenuVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, navigationMenuVariantKeys)
  },
})