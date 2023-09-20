import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const h2Fn = createRecipe('h2', {}, [])

const h2VariantMap = {}
const h2VariantKeys = Object.keys(h2VariantMap)
export const h2 = Object.assign(h2Fn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: h2VariantKeys,
  variantMap: h2VariantMap,
  splitVariantProps(props) {
    return splitProps(props, h2VariantKeys)
  },
})