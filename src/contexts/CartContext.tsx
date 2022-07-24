import { createContext, ReactNode, useReducer } from 'react'
import { addCartItem, removeCartItem } from '../reducers/cart/actions'
import { CartItem, cartItemsReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])

  function addItem(item: CartItem) {
    dispatch(addCartItem(item))
  }

  function removeItem(item: CartItem) {
    dispatch(removeCartItem(item))
  }

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
