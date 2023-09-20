import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableFooterFn = createRecipe('tableFooter', {}, [])

const tableFooterVariantMap = {}
const tableFooterVariantKeys = Object.keys(tableFooterVariantMap)
export const tableFooter = Object.assign(tableFooterFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableFooterVariantKeys,
  variantMap: tableFooterVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableFooterVariantKeys)
  },
})