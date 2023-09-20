import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardContentFn = createRecipe('cardContent', {}, [])

const cardContentVariantMap = {}
const cardContentVariantKeys = Object.keys(cardContentVariantMap)
export const cardContent = Object.assign(cardContentFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: cardContentVariantKeys,
  variantMap: cardContentVariantMap,
  splitVariantProps(props) {
    return splitProps(props, cardContentVariantKeys)
  },
})