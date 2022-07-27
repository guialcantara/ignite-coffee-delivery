import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../styles/themes/dark'
import { defaultTheme } from '../styles/themes/default'

interface ThemeContextType {
  theme: string
  handleSetTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState('default')

  function handleSetTheme(theme: string) {
    setTheme(theme)
    localStorage.setItem('@ignite-coffee-delivery:theme-state-1.0.0', theme)
  }

  useLayoutEffect(() => {
    const theme = localStorage.getItem(
      '@ignite-coffee-delivery:theme-state-1.0.0',
    )

    if (theme) {
      setTheme(theme)
    }
  }, [])
  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      <ThemeProvider theme={theme === 'default' ? defaultTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
