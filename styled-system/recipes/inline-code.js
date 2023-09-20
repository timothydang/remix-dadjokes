import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const inlineCodeFn = createRecipe('inlineCode', {}, [])

const inlineCodeVariantMap = {}
const inlineCodeVariantKeys = Object.keys(inlineCodeVariantMap)
export const inlineCode = Object.assign(inlineCodeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: inlineCodeVariantKeys,
  variantMap: inlineCodeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, inlineCodeVariantKeys)
  },
})