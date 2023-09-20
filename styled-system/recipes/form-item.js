import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const formItemFn = createRecipe('formItem', {}, [])

const formItemVariantMap = {}
const formItemVariantKeys = Object.keys(formItemVariantMap)
export const formItem = Object.assign(formItemFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: formItemVariantKeys,
  variantMap: formItemVariantMap,
  splitVariantProps(props) {
    return splitProps(props, formItemVariantKeys)
  },
})