import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const leadFn = createRecipe('lead', {}, [])

const leadVariantMap = {}
const leadVariantKeys = Object.keys(leadVariantMap)
export const lead = Object.assign(leadFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: leadVariantKeys,
  variantMap: leadVariantMap,
  splitVariantProps(props) {
    return splitProps(props, leadVariantKeys)
  },
})