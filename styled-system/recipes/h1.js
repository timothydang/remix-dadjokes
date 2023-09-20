import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const h1Fn = createRecipe('h1', {}, [])

const h1VariantMap = {}
const h1VariantKeys = Object.keys(h1VariantMap)
export const h1 = Object.assign(h1Fn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: h1VariantKeys,
  variantMap: h1VariantMap,
  splitVariantProps(props) {
    return splitProps(props, h1VariantKeys)
  },
})