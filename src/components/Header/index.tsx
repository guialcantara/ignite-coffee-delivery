import darkLogo from '../../assets/Logo-Dark.svg'
import lightLogo from '../../assets/Logo-Light.svg'
import {
  Actions,
  CartButtonContainer,
  CartCounter,
  HeaderContainer,
  Location,
} from './styles'
import { MapPin, MoonStars, ShoppingCart, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import Toggle from 'react-toggle'
import { ThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const { theme, handleSetTheme } = useContext(ThemeContext)

  const counter = cartItems?.reduce((total, item) => {
    return (total += item.amount)
  }, 0)

  function changeTheme() {
    handleSetTheme(theme === 'default' ? 'dark' : 'default')
  }
  return (
    <HeaderContainer>
      <NavLink to="/" title="Cart">
        <img src={theme === 'dark' ? darkLogo : lightLogo} alt="" />
      </NavLink>

      <Actions>
        <Toggle
          checked={theme === 'dark'}
          icons={{
            checked: <Sun size={16} />,
            unchecked: <MoonStars size={16} />,
          }}
          className="toggle-custom"
          onChange={changeTheme}
        />
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
