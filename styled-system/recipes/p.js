import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const pFn = createRecipe('p', {}, [])

const pVariantMap = {}
const pVariantKeys = Object.keys(pVariantMap)
export const p = Object.assign(pFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: pVariantKeys,
  variantMap: pVariantMap,
  splitVariantProps(props) {
    return splitProps(props, pVariantKeys)
  },
})