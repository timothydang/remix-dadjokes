import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const cardDescriptionFn = createRecipe('cardDescription', {}, [])

const cardDescriptionVariantMap = {}
const cardDescriptionVariantKeys = Object.keys(cardDescriptionVariantMap)
export const cardDescription = Object.assign(cardDescriptionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: cardDescriptionVariantKeys,
  variantMap: cardDescriptionVariantMap,
  splitVariantProps(props) {
    return splitProps(props, cardDescriptionVariantKeys)
  },
})