import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardFooterFn = createRecipe('cardFooter', {}, [])

const cardFooterVariantMap = {}
const cardFooterVariantKeys = Object.keys(cardFooterVariantMap)
export const cardFooter = Object.assign(cardFooterFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: cardFooterVariantKeys,
  variantMap: cardFooterVariantMap,
  splitVariantProps(props) {
    return splitProps(props, cardFooterVariantKeys)
  },
})