import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  BoxContainer,
  ButtonsContainer,
  CartContainer,
  CartList,
  CartListFooter,
  InputContainer,
  PaymentTypeButton,
  TextInput,
} from './styles'
import { CartItemCard } from '../../components/CartItemCard'

export function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <CartContainer action="">
      <BoxContainer>
        <div>
          <h3>
            <MapPinLine size={22} />
            Endereço de Entrega
          </h3>
          <p>Informe o endereço odne deseja receber seu pedido</p>
        </div>
        <InputContainer>
          <TextInput type="text" placeholder="CEP" />
          <TextInput type="text" placeholder="Rua" />
          <TextInput type="text" placeholder="Número" />
          <TextInput type="text" placeholder="Complemento" />
          <TextInput type="text" placeholder="Bairro" />
          <TextInput type="text" placeholder="Cidade" />
          <TextInput type="text" placeholder="UF" />
        </InputContainer>
      </BoxContainer>

      <BoxContainer>
        <div>
          <h3>
            <CurrencyDollar size={22} />
            Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>

        <ButtonsContainer>
          <PaymentTypeButton>
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentTypeButton>

          <PaymentTypeButton>
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </PaymentTypeButton>

          <PaymentTypeButton>
            <Money size={16} />
            DINHEIRO
          </PaymentTypeButton>
        </ButtonsContainer>
      </BoxContainer>

      <div>
        <BoxContainer customBorder>
          <CartList>
            {cartItems.map((item) => {
              return <CartItemCard key={item.id} {...item} />
            })}
          </CartList>

          <CartListFooter>
            <div>
              <p>Total de itens</p> <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p> <span>R$ 3,50</span>
            </div>
            <div className="total">
              <p>Total</p> <span>R$ 33,20</span>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </CartListFooter>
        </BoxContainer>
      </div>
    </CartContainer>
  )
}
