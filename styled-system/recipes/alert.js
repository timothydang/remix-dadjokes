import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertFn = createRecipe('alert', {}, [])

const alertVariantMap = {}
const alertVariantKeys = Object.keys(alertVariantMap)
export const alert = Object.assign(alertFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: alertVariantKeys,
  variantMap: alertVariantMap,
  splitVariantProps(props) {
    return splitProps(props, alertVariantKeys)
  },
})