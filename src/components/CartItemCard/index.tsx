import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { CartItem } from '../../reducers/cart/reducer'
import { AmountInput } from '../AmountInput'
import { CartItemContainer, RemoveButton } from './styles'

export function CartItemCard({ imageURL, amount, id, title, value }: CartItem) {
  const [itemAmount, setItemAmount] = useState(amount)

  function changeAmount(amount: number) {
    console.log(amount)
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
          <RemoveButton type="button">
            <Trash size={16}></Trash>
            REMOVER
          </RemoveButton>
        </div>
      </div>
    </CartItemContainer>
  )
}
