import logo from '../../assets/Coffee-delivery-logo.svg'
import {
  Actions,
  CartButtonContainer,
  CartCounter,
  HeaderContainer,
  Location,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const counter = cartItems?.reduce((total, item) => {
    return (total += item.amount)
  }, 0)
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <Actions>
        <Location>
          <MapPin size={24} weight="fill" />
          <p>Aparecida, SP</p>
        </Location>
        <CartButtonContainer>
          <ShoppingCart size={24} weight="fill" />
          <CartCounter>{counter}</CartCounter>
        </CartButtonContainer>
      </Actions>
    </HeaderContainer>
  )
}
