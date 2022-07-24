import {
  HomeContainer,
  TopContainer,
  QualityItem,
  QualityList,
  Title,
  CoffeeList,
} from './styles'
import CoffeeImage from '../../assets/Coffee-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { coffeeData } from '../../utils/mock-data'
import { CoffeeCard } from '../../components/CoffeeCard'
export function Home() {
  return (
    <HomeContainer>
      <TopContainer>
        <section>
          <Title>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <QualityList>
            <QualityItem bgColor="yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </QualityItem>
            <QualityItem bgColor="base-text">
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
      <h2>Nossos cafés</h2>
      <CoffeeList>
        {coffeeData.map((coffee) => {
          return (
            <CoffeeCard
              id={coffee.id}
              key={coffee.id}
              title={coffee.title}
              imageURL={coffee.imageURL}
              description={coffee.description}
              value={coffee.value}
              labels={coffee.labels}
            />
          )
        })}
      </CoffeeList>
    </HomeContainer>
  )
}
