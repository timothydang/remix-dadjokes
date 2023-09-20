import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertDescriptionFn = createRecipe('alertDescription', {}, [])

const alertDescriptionVariantMap = {}
const alertDescriptionVariantKeys = Object.keys(alertDescriptionVariantMap)
export const alertDescription = Object.assign(alertDescriptionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: alertDescriptionVariantKeys,
  variantMap: alertDescriptionVariantMap,
  splitVariantProps(props) {
    return splitProps(props, alertDescriptionVariantKeys)
  },
})