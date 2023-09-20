import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const separatorFn = createRecipe('separator', {
  "orientation": "horizontal"
}, [])

const separatorVariantMap = {
  "orientation": [
    "horizontal",
    "vertical"
  ]
}
const separatorVariantKeys = Object.keys(separatorVariantMap)
export const separator = Object.assign(separatorFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: separatorVariantKeys,
  variantMap: separatorVariantMap,
  splitVariantProps(props) {
    return splitProps(props, separatorVariantKeys)
  },
})