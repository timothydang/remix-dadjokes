import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const toastViewportFn = createRecipe('toastViewport', {}, [])

const toastViewportVariantMap = {}
const toastViewportVariantKeys = Object.keys(toastViewportVariantMap)
export const toastViewport = Object.assign(toastViewportFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: toastViewportVariantKeys,
  variantMap: toastViewportVariantMap,
  splitVariantProps(props) {
    return splitProps(props, toastViewportVariantKeys)
  },
})