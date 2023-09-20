import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableCellFn = createRecipe('tableCell', {}, [])

const tableCellVariantMap = {}
const tableCellVariantKeys = Object.keys(tableCellVariantMap)
export const tableCell = Object.assign(tableCellFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableCellVariantKeys,
  variantMap: tableCellVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableCellVariantKeys)
  },
})