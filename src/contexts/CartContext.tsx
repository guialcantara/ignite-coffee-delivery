import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addCartItem,
  clearCart,
  removeCartItem,
  removeFromCart,
} from '../reducers/cart/actions'
import { CartItem, cartItemsReducer } from '../reducers/cart/reducer'

interface OrderData {
  street: string
  houseNumber: number
  district: string
  city: string
  uf: string
  payment: string
}
interface CartContextType {
  cartItems: CartItem[]
  newOrder: OrderData
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  removeFullItemFromCart: (id: number) => void
  createNewOrder: (data: OrderData) => void
  clearCartItems: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])
  const [newOrder, setNewOrder] = useState<OrderData>({} as OrderData)

  function addItem(item: CartItem) {
    dispatch(addCartItem(item))
  }

  function removeItem(item: CartItem) {
    dispatch(removeCartItem(item))
  }
  function removeFullItemFromCart(id: number) {
    dispatch(removeFromCart(id))
  }

  function createNewOrder(data: OrderData) {
    setNewOrder(data)
  }

  function clearCartItems() {
    dispatch(clearCart())
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        createNewOrder,
        newOrder,
        removeFullItemFromCart,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
