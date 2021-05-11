import React from 'react'
import './App.css'
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
import EventView from '../EventView/EventView'
import ScheduledEventPage from '../ScheduledEventPage/ScheduledEventPage'
import hamburgerMenu from '../speed-schedule-resources/hamburger-icon.png'
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        date: new Date(),
        month: new Date().getMonth(),
        day: new Date().getDay(),
        year: new Date().getFullYear(),
        events: [...dummyDataObj.events],
        scheduledEvents: [...dummyDataObj.scheduledEvents],
        navActive: false
    }
  }

  setDateState = (newDate) => {
    this.setState({
      date: newDate
    })
  }

  setYearState = (newYear) => {
    this.setState({
      year: newYear
    })
  }

  setMonthState = (newMonth) => {
    this.setState({
      month: newMonth
    })
  }

  setDayState = (newDay) => {
    this.setState({
      day: newDay
    })
  }

  setFullDateState = (newDate) => {
    this.setState({
      date: newDate,
      month: Date(newDate).getMonth(),
      day: Date(newDate).getDay(),
      year: Date(newDate).getFullYear()
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

  toggleNavActive = () => {
    this.setState({
      navActive: !this.state.navActive
    })
  }

  deleteEventFromState = (eventId) => {
    const events = this.state.events.filter(eventObj => eventObj.event_id !== eventId)
    console.log(events, eventId)
    this.setState({
      events: events
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
            path={'/event-view/:eventId'}
            component={EventView}
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
            path={'scheduled-events/:schedId'}
            component={ScheduledEventPage}
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
      month: this.state.month,
      day: this.state.day,
      year: this.state.year,
      events: this.state.events,
      scheduledEvents: this.state.scheduledEvents,
      handleAddEventStateChange: this.handleAddEventStateChange,
      handleSchedEventStateChange: this.handleSchedEventStateChange,
      setDateState: this.setDateState,
      setDayState: this.setDayState,
      setMonthState: this.setMonthState,
      setYearState: this.setYearState,
      setFullDateState: this.setFullDateState,
      deleteEventFromState: this.deleteEventFromState
    }

    let nav = null
    if (this.state.navActive) {
        nav = <nav className="app-nav">
        <Link to={'/home'} className="app-nav-link">
          <button className="nav-button">Home</button>
        </Link>
        <Link to={'/'} className="app-nav-link">
          <button className="nav-button">Log Out</button>
        </Link>
      </nav>
    }

    return (
      <SpeedScheduleContext.Provider value={values}>
      <div className="app-container">
        <header className="app-header">
          <div className="top-row-header">
            <h1>Speed Schedule</h1>
            <div className="menu-container" onClick={() => this.toggleNavActive()}>
              <img src={hamburgerMenu} alt="hamburger-menu" className="hamburger-menu"/>
            </div>
          </div>
          {nav}
        </header>
        <main className="app-main">
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