import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const smallFn = createRecipe('small', {}, [])

const smallVariantMap = {}
const smallVariantKeys = Object.keys(smallVariantMap)
export const small = Object.assign(smallFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: smallVariantKeys,
  variantMap: smallVariantMap,
  splitVariantProps(props) {
    return splitProps(props, smallVariantKeys)
  },
})