import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const inputFn = createRecipe('input', {
  "size": "md"
}, [])

const inputVariantMap = {
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}
const inputVariantKeys = Object.keys(inputVariantMap)
export const input = Object.assign(inputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: inputVariantMap,
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys)
  },
})