import expressoTradicional from '../assets/Coffee-Expresso.svg'
import expressoAmericano from '../assets/Coffee-Americano.svg'
import expressoCremoso from '../assets/Coffee-Expresso-Cremoso.svg'
import expressoGelado from '../assets/Coffee-Cafe-Gelado.svg'
import cafeComLeite from '../assets/Coffee-Cafe-com-Leite.svg'

export const coffeeData = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    imageURL: expressoTradicional,
    labels: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    imageURL: expressoAmericano,
    labels: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    imageURL: expressoCremoso,
    labels: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    imageURL: expressoGelado,
    labels: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },

  {
    id: 5,
    title: 'Café com Leite',
    imageURL: cafeComLeite,
    labels: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
]
