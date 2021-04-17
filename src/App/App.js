import React from 'react'
import { Link, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import Signup from '../Signup/Signup'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        events: []
    }
  }

  renderMainRoutes = () => {
    return (
      <>
        <Route
            exact
            path={'/'}
            component={LandingPage}
            />
        <Route 
            path={'/signup'}
            component={Signup}
            />
        <Route 
            path={'/login'}
            component={Login}
            />
        <Route 
            path={'/home'}
            component={Home}
            />
        <Route 
            path={'/events'}
            component={EventsList}
            />
      </>
    )
  }

  render() {
    return (
      <div>
        <header>
          <h1>Speed Schedule</h1>
          <div>
            <img src="" alt="hamburger-menu"/>
          </div>
          <nav className="hidden">
              <button>Home</button>
              <button>Log Out</button>
          </nav>
        </header>
        <main>
          {this.renderMainRoutes()}
        </main>
        <footer>
          <h4>&copy;Nicholas Reid</h4>
        </footer>
      </div>
    )
  }
}