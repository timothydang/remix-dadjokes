import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableHeadFn = createRecipe('tableHead', {}, [])

const tableHeadVariantMap = {}
const tableHeadVariantKeys = Object.keys(tableHeadVariantMap)
export const tableHead = Object.assign(tableHeadFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableHeadVariantKeys,
  variantMap: tableHeadVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableHeadVariantKeys)
  },
})