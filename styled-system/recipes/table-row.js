import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableRowFn = createRecipe('tableRow', {}, [])

const tableRowVariantMap = {}
const tableRowVariantKeys = Object.keys(tableRowVariantMap)
export const tableRow = Object.assign(tableRowFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableRowVariantKeys,
  variantMap: tableRowVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableRowVariantKeys)
  },
})