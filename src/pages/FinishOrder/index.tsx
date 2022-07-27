import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import deliveryIllustration from '../../assets/Illustration.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  FinishOrderContainer,
  InformationContainer,
  InformationItem,
  Title,
} from './styles'

export function FinishOrder() {
  const { newOrder } = useContext(CartContext)
  return (
    <FinishOrderContainer>
      <aside>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>
        <InformationContainer>
          <InformationItem bgColor="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>

            <p>
              Entrega em Rua{' '}
              <strong>
                {newOrder.street}, {newOrder.houseNumber}
              </strong>
              <br />
              {newOrder.district} - {newOrder.city}, {newOrder.uf}
            </p>
          </InformationItem>
          <InformationItem bgColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>

            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </InformationItem>
          <InformationItem bgColor="yellow-dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>

            <p>
              Pagamento na entrega <br />
              <strong>{newOrder.payment}</strong>
            </p>
          </InformationItem>
        </InformationContainer>
      </aside>
      <img src={deliveryIllustration} alt="" />
    </FinishOrderContainer>
  )
}
