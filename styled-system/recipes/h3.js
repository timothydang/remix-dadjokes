import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const h3Fn = createRecipe('h3', {}, [])

const h3VariantMap = {}
const h3VariantKeys = Object.keys(h3VariantMap)
export const h3 = Object.assign(h3Fn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: h3VariantKeys,
  variantMap: h3VariantMap,
  splitVariantProps(props) {
    return splitProps(props, h3VariantKeys)
  },
})