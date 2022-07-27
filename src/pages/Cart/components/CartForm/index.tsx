import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { InputContainer, TextInput } from './styles'

export function CartForm() {
  const { register } = useFormContext()
  return (
    <>
      <div>
        <h3>
          <MapPinLine size={22} />
          Endereço de Entrega
        </h3>
        <p>Informe o endereço odne deseja receber seu pedido</p>
      </div>
      <InputContainer>
        <TextInput {...register('cep')} type="text" placeholder="CEP" />
        <TextInput {...register('street')} type="text" placeholder="Rua" />
        <TextInput
          {...register('houseNumber', { valueAsNumber: true })}
          type="number"
          placeholder="Número"
        />
        <TextInput
          {...register('complement')}
          type="text"
          placeholder="Complemento"
        />
        <TextInput {...register('district')} type="text" placeholder="Bairro" />
        <TextInput {...register('city')} type="text" placeholder="Cidade" />
        <TextInput {...register('uf')} type="text" placeholder="UF" />
      </InputContainer>
    </>
  )
}
