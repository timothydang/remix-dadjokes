import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const formLabelFn = createRecipe('formLabel', {}, [])

const formLabelVariantMap = {}
const formLabelVariantKeys = Object.keys(formLabelVariantMap)
export const formLabel = Object.assign(formLabelFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: formLabelVariantKeys,
  variantMap: formLabelVariantMap,
  splitVariantProps(props) {
    return splitProps(props, formLabelVariantKeys)
  },
})