import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const formMessageFn = createRecipe('formMessage', {}, [])

const formMessageVariantMap = {}
const formMessageVariantKeys = Object.keys(formMessageVariantMap)
export const formMessage = Object.assign(formMessageFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: formMessageVariantKeys,
  variantMap: formMessageVariantMap,
  splitVariantProps(props) {
    return splitProps(props, formMessageVariantKeys)
  },
})