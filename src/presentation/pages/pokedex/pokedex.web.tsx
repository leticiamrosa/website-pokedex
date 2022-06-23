import React from 'react'

interface Props {
  count: number
}

export const Pokedex: React.FC<Props> = ({ count }: Props) => {
  return (
        <div>
            <h1>Pokedex `${ count }`</h1>
        </div>
  )
}
