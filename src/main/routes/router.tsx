import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makePokedex } from '@main/factories/pages/pokedex/pokedex-factory'
import { ROUTES } from './names'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={makePokedex} />
      </Switch>
    </BrowserRouter>
  )
}
