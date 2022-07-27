import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItemCard } from '../CartItemCard'
import { CartListContainer, CartListFooter } from './styles'

export function CartList() {
  const { cartItems } = useContext(CartContext)

  const deliveryValue = 3.3

  const deliveryValueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(deliveryValue)

  const totalItemsValue = cartItems.reduce((total, item) => {
    return (total += item.amount * item.value)
  }, 0)

  const totalItemsValueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalItemsValue)

  const totalValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalItemsValue + deliveryValue)
  return (
    <>
      <CartListContainer>
        {cartItems.map((item) => {
          return <CartItemCard key={item.id} {...item} />
        })}
      </CartListContainer>

      <CartListFooter>
        <div>
          <p>Total de itens</p> <span>{totalItemsValueFormatted}</span>
        </div>
        <div>
          <p>Entrega</p> <span>{deliveryValueFormatted}</span>
        </div>
        <div className="total">
          <p>Total</p> <span>{totalValue}</span>
        </div>
        <button type="submit">CONFIRMAR PEDIDO</button>
      </CartListFooter>
    </>
  )
}
