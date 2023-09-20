import { splitProps, getSlotCompoundVariant } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const sliderDefaultVariants = {
  "size": "md"
}
const sliderCompoundVariants = []

const sliderSlotNames = [
  [
    "root",
    "slider__root"
  ],
  [
    "label",
    "slider__label"
  ],
  [
    "thumb",
    "slider__thumb"
  ],
  [
    "output",
    "slider__output"
  ],
  [
    "track",
    "slider__track"
  ],
  [
    "range",
    "slider__range"
  ],
  [
    "control",
    "slider__control"
  ],
  [
    "markerGroup",
    "slider__markerGroup"
  ],
  [
    "marker",
    "slider__marker"
  ]
]
const sliderSlotFns = sliderSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sliderDefaultVariants, getSlotCompoundVariant(sliderCompoundVariants, slotName))])

const sliderFn = (props = {}) => {
  return Object.fromEntries(sliderSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const sliderVariantKeys = [
  "size"
]

export const slider = Object.assign(sliderFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: sliderVariantKeys,
  variantMap: {
  "size": [
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, sliderVariantKeys)
  },
})