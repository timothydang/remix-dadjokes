import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tagsInputDefaultVariants = {
  "size": "md"
}
const tagsInputCompoundVariants = []

const tagsInputSlotNames = [
  [
    "root",
    "tagsInput__root"
  ],
  [
    "label",
    "tagsInput__label"
  ],
  [
    "control",
    "tagsInput__control"
  ],
  [
    "input",
    "tagsInput__input"
  ],
  [
    "clearTrigger",
    "tagsInput__clearTrigger"
  ],
  [
    "tag",
    "tagsInput__tag"
  ],
  [
    "tagInput",
    "tagsInput__tagInput"
  ],
  [
    "tagDeleteTrigger",
    "tagsInput__tagDeleteTrigger"
  ]
]
const tagsInputSlotFns = tagsInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tagsInputDefaultVariants, getSlotCompoundVariant(tagsInputCompoundVariants, slotName))])

const tagsInputFn = (props = {}) => {
  return Object.fromEntries(tagsInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const tagsInputVariantKeys = [
  "size"
]

export const tagsInput = Object.assign(tagsInputFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: tagsInputVariantKeys,
  variantMap: {
  "size": [
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tagsInputVariantKeys)
  },
})