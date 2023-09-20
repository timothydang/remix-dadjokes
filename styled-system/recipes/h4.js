import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const h4Fn = createRecipe('h4', {}, [])

const h4VariantMap = {}
const h4VariantKeys = Object.keys(h4VariantMap)
export const h4 = Object.assign(h4Fn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: h4VariantKeys,
  variantMap: h4VariantMap,
  splitVariantProps(props) {
    return splitProps(props, h4VariantKeys)
  },
})