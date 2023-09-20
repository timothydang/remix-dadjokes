import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const blockquoteFn = createRecipe('blockquote', {}, [])

const blockquoteVariantMap = {}
const blockquoteVariantKeys = Object.keys(blockquoteVariantMap)
export const blockquote = Object.assign(blockquoteFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: blockquoteVariantKeys,
  variantMap: blockquoteVariantMap,
  splitVariantProps(props) {
    return splitProps(props, blockquoteVariantKeys)
  },
})