import { createContext, ReactNode, useReducer, useState } from 'react'
import {
  addCartItem,
  removeCartItem,
  removeFromCart,
} from '../reducers/cart/actions'
import { CartItem, cartItemsReducer } from '../reducers/cart/reducer'

interface OrderData {
  rua: string
  numero: number
  bairro: string
  cidade: string
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        createNewOrder,
        newOrder,
        removeFullItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
