import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ButtonsContainer, PaymentTypeButton } from './styles'

interface CartPaymentTypeProps {
  payment: string
  setPayment: (type: string) => void
}

export enum PaymentTypes {
  CREDIT = 'Cartão de Crédito',
  DEBIT = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

export function CartPaymentType({ payment, setPayment }: CartPaymentTypeProps) {
  return (
    <>
      <div>
        <h3>
          <CurrencyDollar size={22} />
          Pagamento
        </h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>

      <ButtonsContainer>
        <PaymentTypeButton
          type="button"
          className={payment === PaymentTypes.CREDIT ? 'selected' : ''}
          onClick={() => setPayment(PaymentTypes.CREDIT)}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </PaymentTypeButton>

        <PaymentTypeButton
          type="button"
          className={payment === PaymentTypes.DEBIT ? 'selected' : ''}
          onClick={() => setPayment(PaymentTypes.DEBIT)}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </PaymentTypeButton>

        <PaymentTypeButton
          type="button"
          className={payment === PaymentTypes.MONEY ? 'selected' : ''}
          onClick={() => setPayment(PaymentTypes.MONEY)}
        >
          <Money size={16} />
          DINHEIRO
        </PaymentTypeButton>
      </ButtonsContainer>
    </>
  )
}
