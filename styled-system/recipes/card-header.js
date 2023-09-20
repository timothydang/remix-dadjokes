import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardHeaderFn = createRecipe('cardHeader', {}, [])

const cardHeaderVariantMap = {}
const cardHeaderVariantKeys = Object.keys(cardHeaderVariantMap)
export const cardHeader = Object.assign(cardHeaderFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: cardHeaderVariantKeys,
  variantMap: cardHeaderVariantMap,
  splitVariantProps(props) {
    return splitProps(props, cardHeaderVariantKeys)
  },
})