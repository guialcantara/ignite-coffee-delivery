import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartItem {
  id: number
  title: string
  imageURL: string
  value: number
  amount: number
}

export function cartItemsReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CART_ITEM: {
      const itemIndex = state.findIndex((item) => {
        return item.id === action.payload.item.id
      })

      return produce(state, (draft) => {
        if (itemIndex < 0) {
          draft.push(action.payload.item)
        } else {
          draft[itemIndex].amount += action.payload.item.amount
        }
      })
    }

    case ActionTypes.REMOVE_CART_ITEM: {
      const itemIndex = state.findIndex((item) => {
        return item.id === action.payload.item.id
      })

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        if (draft[itemIndex].amount <= 1) {
          draft.splice(itemIndex, 1)
        } else {
          draft[itemIndex].amount -= 1
        }
      })
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const itemIndex = state.findIndex((item) => {
        return item.id === action.payload.id
      })

      if (itemIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.splice(itemIndex, 1)
      })
    }

    case ActionTypes.CLEAR_CART:
      return []

    default:
      return state
  }
}
