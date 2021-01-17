import './app.scss'

import { connect } from 'react-redux'

import Header from './components/Header'
import RouteList from './components/RouteList'

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <RouteList />
    </div>
  )
}

export default connect()(App)
