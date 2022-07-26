import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function addCartItem(item: CartItem) {
  return {
    type: ActionTypes.ADD_CART_ITEM,
    payload: {
      item,
    },
  }
}

export function removeCartItem(item: CartItem) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      item,
    },
  }
}

export function removeFromCart(id: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}
