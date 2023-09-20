import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const toggleFn = createRecipe('toggle', {
  "variant": "default",
  "size": "default"
}, [])

const toggleVariantMap = {
  "variant": [
    "default",
    "outline"
  ],
  "size": [
    "default",
    "sm",
    "lg"
  ]
}
const toggleVariantKeys = Object.keys(toggleVariantMap)
export const toggle = Object.assign(toggleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: toggleVariantKeys,
  variantMap: toggleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, toggleVariantKeys)
  },
})