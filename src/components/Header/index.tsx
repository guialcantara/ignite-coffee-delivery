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
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const counter = cartItems?.reduce((total, item) => {
    return (total += item.amount)
  }, 0)
  return (
    <HeaderContainer>
      <NavLink to="/" title="Cart">
        <img src={logo} alt="" />
      </NavLink>

      <Actions>
        <Location>
          <MapPin size={24} weight="fill" />
          <p>Aparecida, SP</p>
        </Location>
        <NavLink to="/Cart" title="Cart">
          <CartButtonContainer>
            <ShoppingCart size={24} weight="fill" />
            {counter > 0 && <CartCounter>{counter}</CartCounter>}
          </CartButtonContainer>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
