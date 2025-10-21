import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../mock/mockData";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: products,
        cart: [],
        subTotal: 0
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const findCartItem = state.cart.findIndex((item) => item.id === payload.id)
            if (findCartItem !== -1) {
                const updatedItems = state.cart.map((item, index) => {
                    if (item.id === payload?.id) {
                        const updatedQty = item?.qty + 1
                        return {
                            ...item,
                            qty: updatedQty
                        }
                    } else {
                        return item
                    }
                })
                return {
                    cart: updatedItems
                }
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            ...payload,
                            qty: 1
                        }
                    ]
                }
            }
        },
        removeFromCart: (state, { payload }) => {
            return {
                ...state,
                cart: state.cart.filter(({ id }) => id !== payload.id)
            }
        },
        clearCart: () => {
            return {
                ...state,
                cart: []
            }
        },
        incQty: (state, { payload }) => {
            const updatedItems = state.cart.map((item, index) => {
                if (item.id === payload?.id) {
                    const updatedQty = item?.qty + 1
                    return {
                        ...item,
                        qty: updatedQty
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: updatedItems
            }
        },
        decQty: (state, { payload }) => {
            const findCartItem = state.cart.find(({ id }) => id === payload.id)
            if (findCartItem?.qty <= 1) {
                return {
                    cart: state.cart.filter(({ id }) => id !== findCartItem.id)
                }
            } else {
                const updatedItems = state.cart.map((item, index) => {
                    if (item.id === findCartItem?.id) {
                        const updatedQty = item?.qty - 1
                        return {
                            ...item,
                            qty: updatedQty
                        }
                    } else {
                        return item
                    }
                })
                return {
                    ...state,
                    cart: updatedItems
                }
            }
        },
        getSubTotal: (state) => {
            const totalPrice = state.cart.reduce((prev, curr) => {
                return prev + (curr.discountedPrice * curr.qty)
            }, 0)
            return {
                ...state,
                subTotal: totalPrice || 0
            }
        }
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    incQty,
    decQty,
    getSubTotal
} = cartSlice.actions
export default cartSlice.reducer