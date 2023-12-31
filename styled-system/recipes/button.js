import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const buttonFn = createRecipe('button', {
  "variant": "primary",
  "size": "md"
}, [])

const buttonVariantMap = {
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "link"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}
const buttonVariantKeys = Object.keys(buttonVariantMap)
export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})