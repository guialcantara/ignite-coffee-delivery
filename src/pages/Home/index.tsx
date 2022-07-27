import { CoffeeList, HomeContainer } from './styles'

import { coffeeData } from '../../utils/mock-data'
import { CoffeeCard } from './components/CoffeeCard'
import { HomeHeader } from './components/HomeHeader'
export function Home() {
  return (
    <HomeContainer>
      <HomeHeader />
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
