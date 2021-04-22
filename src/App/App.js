import React from 'react'
import { Link, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'
import EventsList from '../EventsList/EventsList'
import CalendarPage from '../CalendarPage/CalendarPage'
import ScheduleEvent from '../ScheduleEvent/ScheduleEvent'
import DailySchedule from '../DailySchedule/DailySchedule'
import SpeedScheduleContext from '../SpeedScheduleContext'
import dummyDataObj from '../dummy-data'
import AddEvent from '../AddEvent/AddEvent'
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        date: new Date(),
        events: [...dummyDataObj.events],
        scheduledEvents: [...dummyDataObj.scheduledEvents]
    }
  }

  setDateState = (newDate) => {
    this.setState({
      date: newDate
    })
  }

  handleAddEventStateChange = (newEvent) => {
    this.setState({
      events: [...this.state.events, newEvent]
    })
  }

  handleSchedEventStateChange = (newScheduledEvent) => {
    this.setState({
      scheduledEvents: [...this.state.scheduledEvents, newScheduledEvent]
    })
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
        <Route 
            path={'/add-event'}
            component={AddEvent}
            />
        <Route 
            path={'/calendar'}
            component={CalendarPage}
            />
        <Route
            path={'/schedule-event'}
            component={ScheduleEvent}
            />
        <Route 
            path={'/daily-schedule'}
            component={DailySchedule}
            />
      </>
    )
  }

  render() {

    const values = {
      date: this.state.date,
      events: this.state.events,
      scheduledEvents: this.state.scheduledEvents,
      handleAddEventStateChange: this.handleAddEventStateChange,
      handleSchedEventStateChange: this.handleSchedEventStateChange,
      setDateState: this.setDateState
    }

    return (
      <SpeedScheduleContext.Provider value={values}>
      <div>
        <header>
          <h1>Speed Schedule</h1>
          <div>
            <img src="" alt="hamburger-menu"/>
          </div>
          <nav className="hidden">
            <Link to={'/home'}>
              <button>Home</button>
            </Link>
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
      </SpeedScheduleContext.Provider>
    )
  }
}

export default App