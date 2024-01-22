import { createSlice } from "@reduxjs/toolkit";

let getLocalItems = JSON.parse(localStorage.getItem('item')) ?? []

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: getLocalItems
  },

  reducers: {
    addItemCart(state, action) {
      const productCart = state.list.find(({ id }) => {
        return id === action.payload.id
      })

      if (!productCart) {
        state.list.push({
          ...action.payload,
        })
      } else {
        productCart.count++
      }

      localStorage.setItem('item', JSON.stringify(state.list))
    },

    resetCart: (state) => {
      state.list.length = 0;
    },

    countPlus(state, action) {
      const product = state.list.find(el => el.id === action.payload);
      if (product) {

        product.count++
      }
      localStorage.setItem('item', JSON.stringify(state.list))
    },

    countMinus(state, action) {
      const product = state.list.find(el => el.id === action.payload)

      if (product.count > 1) {
        product.count--
      } else {
        state.list = state.list.filter((elem) => elem.id !== action.payload)
      }
      localStorage.setItem('item', JSON.stringify(state.list))
    },

    deleteItem(state, action) {
      state.list = state.list.filter((elem) => elem.id !== action.payload)
      localStorage.setItem('item', JSON.stringify(state.list))
    },
  }
})

export const { addItemCart, countPlus, countMinus, deleteItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;