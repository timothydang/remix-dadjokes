import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const articleFn = createRecipe('article', {
  "size": "md"
}, [])

const articleVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}
const articleVariantKeys = Object.keys(articleVariantMap)
export const article = Object.assign(articleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: articleVariantKeys,
  variantMap: articleVariantMap,
  splitVariantProps(props) {
    return splitProps(props, articleVariantKeys)
  },
})