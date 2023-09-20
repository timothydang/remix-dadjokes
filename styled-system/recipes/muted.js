import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const mutedFn = createRecipe('muted', {}, [])

const mutedVariantMap = {}
const mutedVariantKeys = Object.keys(mutedVariantMap)
export const muted = Object.assign(mutedFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: mutedVariantKeys,
  variantMap: mutedVariantMap,
  splitVariantProps(props) {
    return splitProps(props, mutedVariantKeys)
  },
})