import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { QualityItem, QualityList, Title, TopContainer } from './styles'
import CoffeeImage from '../../../../assets/Coffee-image.svg'
export function HomeHeader() {
  return (
    <TopContainer>
      <section>
        <Title>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <QualityList>
          <QualityItem bgColor="yellow-dark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </QualityItem>
          <QualityItem bgColor="dark">
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </QualityItem>
          <QualityItem bgColor="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Entrega rápida e rastreada</p>
          </QualityItem>
          <QualityItem bgColor="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>O café chega fresquinho até você</p>
          </QualityItem>
        </QualityList>
      </section>
      <aside>
        <img src={CoffeeImage} alt="" />
      </aside>
    </TopContainer>
  )
}
