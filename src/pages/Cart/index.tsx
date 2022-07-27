import { useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from '../../contexts/CartContext'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import { CartForm } from './components/CartForm'
import { CartList } from './components/CartList'
import { CartPaymentType, PaymentTypes } from './components/CartPaymentType'
import { BoxContainer, CartContainer } from './styles'

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe o estado'),
  houseNumber: zod.number(),
  complement: zod.string().optional(),
})

type NewOrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Cart() {
  const [payment, setPayment] = useState<string>(PaymentTypes.CREDIT)
  const { createNewOrder, clearCartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      district: '',
      city: '',
      uf: '',
      complement: '',
      houseNumber: 0,
    },
  })

  const { handleSubmit, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    createNewOrder({
      street: data.street,
      houseNumber: data.houseNumber,
      district: data.district,
      city: data.city,
      uf: data.uf,
      payment,
    })
    reset()
    clearCartItems()
    navigate('/FinishOrder')
  }

  return (
    <CartContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <BoxContainer>
        <FormProvider {...newOrderForm}>
          <CartForm />
        </FormProvider>
      </BoxContainer>

      <BoxContainer>
        <CartPaymentType
          payment={payment}
          setPayment={(type: string) => setPayment(type)}
        />
      </BoxContainer>

      <div>
        <BoxContainer customBorder>
          <CartList />
        </BoxContainer>
      </div>
    </CartContainer>
  )
}
