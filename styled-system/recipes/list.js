import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const listFn = createRecipe('list', {}, [])

const listVariantMap = {}
const listVariantKeys = Object.keys(listVariantMap)
export const list = Object.assign(listFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: listVariantKeys,
  variantMap: listVariantMap,
  splitVariantProps(props) {
    return splitProps(props, listVariantKeys)
  },
})