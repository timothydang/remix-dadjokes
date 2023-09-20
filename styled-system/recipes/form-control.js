import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const formControlFn = createRecipe('formControl', {}, [])

const formControlVariantMap = {}
const formControlVariantKeys = Object.keys(formControlVariantMap)
export const formControl = Object.assign(formControlFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: formControlVariantKeys,
  variantMap: formControlVariantMap,
  splitVariantProps(props) {
    return splitProps(props, formControlVariantKeys)
  },
})