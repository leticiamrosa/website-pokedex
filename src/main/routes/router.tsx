import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { makePokedex } from '@main/factories/pages/pokedex/pokedex-factory'

export const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/pokedex" exact component={makePokedex}/>
        </Switch>
      </BrowserRouter>
  )
}
