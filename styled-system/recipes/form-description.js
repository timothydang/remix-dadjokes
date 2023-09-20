import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const formDescriptionFn = createRecipe('formDescription', {}, [])

const formDescriptionVariantMap = {}
const formDescriptionVariantKeys = Object.keys(formDescriptionVariantMap)
export const formDescription = Object.assign(formDescriptionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: formDescriptionVariantKeys,
  variantMap: formDescriptionVariantMap,
  splitVariantProps(props) {
    return splitProps(props, formDescriptionVariantKeys)
  },
})