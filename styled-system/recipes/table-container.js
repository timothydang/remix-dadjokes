import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableContainerFn = createRecipe('tableContainer', {}, [])

const tableContainerVariantMap = {}
const tableContainerVariantKeys = Object.keys(tableContainerVariantMap)
export const tableContainer = Object.assign(tableContainerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableContainerVariantKeys,
  variantMap: tableContainerVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableContainerVariantKeys)
  },
})