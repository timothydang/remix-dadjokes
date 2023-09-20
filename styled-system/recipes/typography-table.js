import { splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const typographyTableFn = createRecipe('typographyTable', {}, [])

const typographyTableVariantMap = {}
const typographyTableVariantKeys = Object.keys(typographyTableVariantMap)
export const typographyTable = Object.assign(typographyTableFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: typographyTableVariantKeys,
  variantMap: typographyTableVariantMap,
  splitVariantProps(props) {
    return splitProps(props, typographyTableVariantKeys)
  },
})