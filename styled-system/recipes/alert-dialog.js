import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertDialogDefaultVariants = {}
const alertDialogCompoundVariants = []

const alertDialogSlotNames = [
  [
    "root",
    "alertDialog__root"
  ],
  [
    "trigger",
    "alertDialog__trigger"
  ],
  [
    "portal",
    "alertDialog__portal"
  ],
  [
    "overlay",
    "alertDialog__overlay"
  ],
  [
    "content",
    "alertDialog__content"
  ],
  [
    "header",
    "alertDialog__header"
  ],
  [
    "footer",
    "alertDialog__footer"
  ],
  [
    "title",
    "alertDialog__title"
  ],
  [
    "description",
    "alertDialog__description"
  ],
  [
    "action",
    "alertDialog__action"
  ],
  [
    "cancel",
    "alertDialog__cancel"
  ]
]
const alertDialogSlotFns = alertDialogSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, alertDialogDefaultVariants, getSlotCompoundVariant(alertDialogCompoundVariants, slotName))])

const alertDialogFn = (props = {}) => {
  return Object.fromEntries(alertDialogSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const alertDialogVariantKeys = []

export const alertDialog = Object.assign(alertDialogFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: alertDialogVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, alertDialogVariantKeys)
  },
})