import { ShoppingCart, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { AmountInput } from '../AmountInput'
import { CardContainer, CartButton, Footer, Label } from './styles'

interface CoffeeCardProps {
  id: number
  title: string
  imageURL: string
  labels: string[]
  description: string
  value: number
}

export function CoffeeCard({
  id,
  title,
  imageURL,
  labels,
  description,
  value,
}: CoffeeCardProps) {
  const { addItem } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function handleAddItem() {
    addItem({
      id,
      title,
      value,
      imageURL,
      amount,
    })
  }
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(amount * value)

  return (
    <CardContainer>
      <img src={imageURL} width={100} alt="" />
      <div className="labels">
        {labels.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <Footer>
        <p>
          <span>R$</span>
          {formattedValue}
        </p>
        <AmountInput
          amount={amount}
          changeAmount={(amount: number) => setAmount(amount)}
        />
        <CartButton onClick={handleAddItem}>
          <ShoppingCartSimple size={24} weight="fill" />
        </CartButton>
      </Footer>
    </CardContainer>
  )
}
