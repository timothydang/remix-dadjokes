import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertTitleFn = createRecipe('alertTitle', {}, [])

const alertTitleVariantMap = {}
const alertTitleVariantKeys = Object.keys(alertTitleVariantMap)
export const alertTitle = Object.assign(alertTitleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: alertTitleVariantKeys,
  variantMap: alertTitleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, alertTitleVariantKeys)
  },
})