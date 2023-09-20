import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableCaptionFn = createRecipe('tableCaption', {}, [])

const tableCaptionVariantMap = {}
const tableCaptionVariantKeys = Object.keys(tableCaptionVariantMap)
export const tableCaption = Object.assign(tableCaptionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: tableCaptionVariantKeys,
  variantMap: tableCaptionVariantMap,
  splitVariantProps(props) {
    return splitProps(props, tableCaptionVariantKeys)
  },
})