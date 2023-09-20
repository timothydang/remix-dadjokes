import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const labelFn = createRecipe('label', {
  "size": "md"
}, [])

const labelVariantMap = {
  "size": [
    "sm",
    "md",
    "lg",
    "xl"
  ]
}
const labelVariantKeys = Object.keys(labelVariantMap)
export const label = Object.assign(labelFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: labelVariantKeys,
  variantMap: labelVariantMap,
  splitVariantProps(props) {
    return splitProps(props, labelVariantKeys)
  },
})