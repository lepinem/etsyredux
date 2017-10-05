// actions/index.js

import {FILTER_PRODUCTS} from '../constants'

export const filterProducts = (filterType) => {
  return {
    type: FILTER_PRODUCTS,
    payload: filterType
  }
}
