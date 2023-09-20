import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardTitleFn = createRecipe('cardTitle', {}, [])

const cardTitleVariantMap = {}
const cardTitleVariantKeys = Object.keys(cardTitleVariantMap)
export const cardTitle = Object.assign(cardTitleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: cardTitleVariantKeys,
  variantMap: cardTitleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, cardTitleVariantKeys)
  },
})