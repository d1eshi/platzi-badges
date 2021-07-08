import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import NavBar from 'components/NavBar'

import Badges from 'pages/Badges'
import BadgeEdit from 'pages/BadgeEdit'
import BadgeNew from 'pages/BadgeNew'
import NotFound from 'pages/NotFound'
import Home from 'pages/Home'
import BadgeDetails from 'pages/BadgeDetails'

export default function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/badges' component={Badges} />
        <Route exact path='/badges/new' component={BadgeNew} />
        <Route exact path='/badges/:badgeId' component={BadgeDetails} />
        <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  )
}
