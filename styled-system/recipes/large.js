import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const largeFn = createRecipe('large', {}, [])

const largeVariantMap = {}
const largeVariantKeys = Object.keys(largeVariantMap)
export const large = Object.assign(largeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: largeVariantKeys,
  variantMap: largeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, largeVariantKeys)
  },
})