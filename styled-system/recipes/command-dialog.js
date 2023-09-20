import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const commandDialogDefaultVariants = {}
const commandDialogCompoundVariants = []

const commandDialogSlotNames = [
  [
    "content",
    "command-dialog__content"
  ],
  [
    "command",
    "command-dialog__command"
  ]
]
const commandDialogSlotFns = commandDialogSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, commandDialogDefaultVariants, getSlotCompoundVariant(commandDialogCompoundVariants, slotName))])

const commandDialogFn = (props = {}) => {
  return Object.fromEntries(commandDialogSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const commandDialogVariantKeys = []

export const commandDialog = Object.assign(commandDialogFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: commandDialogVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, commandDialogVariantKeys)
  },
})