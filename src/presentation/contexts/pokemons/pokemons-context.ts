import { Dispatch, SetStateAction, useState } from 'react'
import { createContainer } from 'unstated-next'

interface IPokemonContext {
  count: number
  decrement: () => void
  increment: () => void
  setCount: Dispatch<SetStateAction<number>>
}

const usePokemonsContext = (): IPokemonContext => {
  const [count, setCount] = useState(0)
  const decrement = (): void => setCount(count - 1)
  const increment = (): void => setCount(count + 1)
  return { count, decrement, increment, setCount }
}

export const PokemonsContext = createContainer(usePokemonsContext)
