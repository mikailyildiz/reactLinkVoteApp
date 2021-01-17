import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ROUTE } from '../../routing'

import Links from '../Links'
import NewLink from '../NewLink'

const RouteList = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTE.LINKS} component={Links} />
        <Route path={ROUTE.NEWLINK} component={NewLink} />
      </Switch>
    </BrowserRouter>
  )
}

export default RouteList
