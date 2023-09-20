import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const commandDefaultVariants = {}
const commandCompoundVariants = []

const commandSlotNames = [
  [
    "root",
    "command__root"
  ],
  [
    "inputWrapper",
    "command__inputWrapper"
  ],
  [
    "inputSearch",
    "command__inputSearch"
  ],
  [
    "input",
    "command__input"
  ],
  [
    "list",
    "command__list"
  ],
  [
    "empty",
    "command__empty"
  ],
  [
    "group",
    "command__group"
  ],
  [
    "separator",
    "command__separator"
  ],
  [
    "item",
    "command__item"
  ],
  [
    "shortcut",
    "command__shortcut"
  ]
]
const commandSlotFns = commandSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, commandDefaultVariants, getSlotCompoundVariant(commandCompoundVariants, slotName))])

const commandFn = (props = {}) => {
  return Object.fromEntries(commandSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const commandVariantKeys = []

export const command = Object.assign(commandFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: commandVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, commandVariantKeys)
  },
})