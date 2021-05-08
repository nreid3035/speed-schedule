import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import SpeedScheduleContext from '../SpeedScheduleContext'

class Home extends React.Component {
    static contextType = SpeedScheduleContext
  
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleClickEvents = () => {
      this.props.history.push('/events')
    }

    handleCalendarClick = () => {
      this.props.history.push('/calendar')
    }

    handleTodayClick = () => {
      this.context.setDateState(new Date())
      this.props.history.push('/daily-schedule')
    }

    render() {
        return (
            <>
            <h2>User's Next Scheduled Event</h2>
            <div className="next-event-container">
                <p>event</p>
            </div>
            <Link to={'/add-event'} className="event-link">
              <button className="event-button">Add Event</button>
            </Link>
            <Link to={'/schedule-event'} className="event-link">
              <button className="event-button">Schedule Event</button>
            </Link>
            <div className="bottom-nav-bar">
                <button className="bottom-nav-button" onClick={() => this.handleClickEvents()}>Events</button>
                <button className="bottom-nav-button" onClick={() => this.handleTodayClick()}>Daily View</button>
                <button className="bottom-nav-button" onClick={() => this.handleCalendarClick()}>Calendar</button>                       
            </div>
            </>
        )
    }
}

export default Home