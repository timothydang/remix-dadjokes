import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableBodyFn = createRecipe('tableBody', {}, [])

const tableBodyVariantMap = {}
const tableBodyVariantKeys = Object.keys(tableBodyVariantMap)
export const tableBody = Object.assign(tableBodyFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableBodyVariantKeys,
  variantMap: tableBodyVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableBodyVariantKeys)
  },
})