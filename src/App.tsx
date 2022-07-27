import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { CartContextProvider } from './contexts/CartContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { GlobalStyle } from './styles/global'
import 'react-toggle/style.css'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeContextProvider>
  )
}
