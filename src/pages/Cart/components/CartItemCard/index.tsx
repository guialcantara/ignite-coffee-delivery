import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartItem } from '../../../../reducers/cart/reducer'
import { AmountInput } from '../../../../components/AmountInput'
import { CartItemContainer, RemoveButton } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export function CartItemCard({ imageURL, amount, id, title, value }: CartItem) {
  const { removeItem, addItem, removeFullItemFromCart } =
    useContext(CartContext)
  const [itemAmount, setItemAmount] = useState(amount)

  function changeAmount(amount: number) {
    setItemAmount(amount)
    if (amount < itemAmount) {
      removeItem({
        id,
        title,
        value,
        imageURL,
        amount,
      })
    } else {
      addItem({
        id,
        title,
        value,
        imageURL,
        amount: 1,
      })
    }
  }

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount * value)

  return (
    <CartItemContainer>
      <img src={imageURL} width={64} alt="" />
      <div>
        <div className="texts">
          <p>{title}</p>
          <span>{formattedValue}</span>
        </div>

        <div className="buttons">
          <AmountInput amount={itemAmount} changeAmount={changeAmount} />
          <RemoveButton
            type="button"
            onClick={() => removeFullItemFromCart(id)}
          >
            <Trash size={16}></Trash>
            REMOVER
          </RemoveButton>
        </div>
      </div>
    </CartItemContainer>
  )
}
