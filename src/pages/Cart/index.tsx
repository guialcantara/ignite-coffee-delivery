import { useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { CartItemCard } from './components/CartItemCard'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  rua: zod.string().min(1, 'Informe a rua'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  numero: zod.number().min(0, 'Informe o numero'),
  complemento: zod.string().optional(),
})

type NewOrderFormData = zod.infer<typeof orderFormValidationSchema>

export enum PaymentTypes {
  CREDIT = 'cartão de crédito',
  DEBIT = 'cartão de debito',
  MONEY = 'dinheiro',
}
export function Cart() {
  const [payment, setPayment] = useState(PaymentTypes.CREDIT)
  const { cartItems, createNewOrder } = useContext(CartContext)

  const { register, handleSubmit, reset } = useForm<NewOrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      uf: '',
      complemento: '',
      numero: undefined,
    },
  })

  function handleCreateNewOrder(data: NewOrderFormData) {
    createNewOrder({
      rua: data.rua,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      payment,
    })
    reset()
  }

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
    <CartContainer onSubmit={handleSubmit(handleCreateNewOrder)} action="">
      <BoxContainer>
        <div>
          <h3>
            <MapPinLine size={22} />
            Endereço de Entrega
          </h3>
          <p>Informe o endereço odne deseja receber seu pedido</p>
        </div>
        <InputContainer>
          <TextInput {...register('cep')} type="text" placeholder="CEP" />
          <TextInput {...register('rua')} type="text" placeholder="Rua" />
          <TextInput {...register('numero')} type="text" placeholder="Número" />
          <TextInput
            {...register('complemento')}
            type="text"
            placeholder="Complemento"
          />
          <TextInput {...register('bairro')} type="text" placeholder="Bairro" />
          <TextInput {...register('cidade')} type="text" placeholder="Cidade" />
          <TextInput {...register('uf')} type="text" placeholder="UF" />
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
        </BoxContainer>
      </div>
    </CartContainer>
  )
}
