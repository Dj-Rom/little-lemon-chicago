import { createSlice } from '@reduxjs/toolkit'

export const pageOrderOnlineSlice = createSlice({
  name: 'page_order_online',
  initialState: {
    orderList: [],
    orderAmount: 0,
    sendingOrder: false,
    orderAmounProduct: 0,
  },
  reducers: {
    ORDER_SENDING_START: (state, action) => {
      state.sendingOrder = true
    },
    ORDER_SENDING_SUCCESS: (state) => {
      state.sendingOrder = false
      state.orderList = []
      state.orderAmount = 0
      state.orderAmounProduct = 0
    },
    ADD_PRODUCT: (state, action) => {
      const { title, price } = action.payload

      const numericPrice =
        typeof price === 'string'
          ? parseFloat(price.replace('$', '').trim())
          : price

      const existingProduct = state.orderList.find(
        (product) => product.title === title
      )

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.orderList.push({
          title,
          price: numericPrice,
          quantity: 1,
        })
      }
      state.orderAmounProduct = state.orderList.length
      state.orderAmount += numericPrice
    },
    REMOVE_PRODUCT: (state, action) => {
      const { title, price } = action.payload

      const productIndex = state.orderList.findIndex(
        (product) => product.title === title
      )
      state.orderAmount -= price
      if (productIndex !== -1) {
        const product = state.orderList[productIndex]
        if (product.quantity > 1) {
          product.quantity -= 1
        } else {
          state.orderList.splice(productIndex, 1)
        }
      }
      state.orderAmounProduct = state.orderList.length
    },
  },
})

export const {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ORDER_SENDING_START,
  ORDER_SENDING_SUCCESS,
} = pageOrderOnlineSlice.actions
export const orderOnlineSelector = (state) => state.page_order_online
export default pageOrderOnlineSlice.reducer
