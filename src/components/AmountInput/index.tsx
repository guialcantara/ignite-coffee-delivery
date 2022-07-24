import { Minus, Plus } from 'phosphor-react'
import { AmountInputContainer } from './styles'

interface AmountInputProps {
  amount: number
  changeAmount: (amount: number) => void
}

export function AmountInput({ amount, changeAmount }: AmountInputProps) {
  function handleIncreaseAmount() {
    changeAmount(++amount)
  }
  function handleDecreaseAmount() {
    if (amount > 1) {
      changeAmount(--amount)
    }
  }
  return (
    <AmountInputContainer>
      <Minus size={16} onClick={handleDecreaseAmount} weight="fill" />

      <span>{amount}</span>

      <Plus size={16} onClick={handleIncreaseAmount} weight="fill" />
    </AmountInputContainer>
  )
}
