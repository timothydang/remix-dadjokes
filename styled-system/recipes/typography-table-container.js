import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const typographyTableContainerFn = createRecipe('typographyTableContainer', {}, [])

const typographyTableContainerVariantMap = {}
const typographyTableContainerVariantKeys = Object.keys(typographyTableContainerVariantMap)
export const typographyTableContainer = Object.assign(typographyTableContainerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: typographyTableContainerVariantKeys,
  variantMap: typographyTableContainerVariantMap,
  splitVariantProps(props) {
    return splitProps(props, typographyTableContainerVariantKeys)
  },
})