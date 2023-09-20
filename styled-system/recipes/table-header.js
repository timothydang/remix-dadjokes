import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableHeaderFn = createRecipe('tableHeader', {}, [])

const tableHeaderVariantMap = {}
const tableHeaderVariantKeys = Object.keys(tableHeaderVariantMap)
export const tableHeader = Object.assign(tableHeaderFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableHeaderVariantKeys,
  variantMap: tableHeaderVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableHeaderVariantKeys)
  },
})