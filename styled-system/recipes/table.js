import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableFn = createRecipe('table', {}, [])

const tableVariantMap = {}
const tableVariantKeys = Object.keys(tableVariantMap)
export const table = Object.assign(tableFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableVariantKeys,
  variantMap: tableVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys)
  },
})