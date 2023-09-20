import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const iconFn = createRecipe('icon', {
  "size": "md"
}, [])

const iconVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}
const iconVariantKeys = Object.keys(iconVariantMap)
export const icon = Object.assign(iconFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: iconVariantKeys,
  variantMap: iconVariantMap,
  splitVariantProps(props) {
    return splitProps(props, iconVariantKeys)
  },
})