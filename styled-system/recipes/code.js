import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const codeFn = createRecipe('code', {
  "size": "md"
}, [])

const codeVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}
const codeVariantKeys = Object.keys(codeVariantMap)
export const code = Object.assign(codeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: codeVariantKeys,
  variantMap: codeVariantMap,
  splitVariantProps(props) {
    return splitProps(props, codeVariantKeys)
  },
})