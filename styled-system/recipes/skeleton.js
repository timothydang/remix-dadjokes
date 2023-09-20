import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const skeletonFn = createRecipe('skeleton', {}, [])

const skeletonVariantMap = {}
const skeletonVariantKeys = Object.keys(skeletonVariantMap)
export const skeleton = Object.assign(skeletonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: skeletonVariantKeys,
  variantMap: skeletonVariantMap,
  splitVariantProps(props) {
    return splitProps(props, skeletonVariantKeys)
  },
})