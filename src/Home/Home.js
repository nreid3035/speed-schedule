import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
import SpeedScheduleContext from '../SpeedScheduleContext'
import { switchMonthToNumber, switchDayToNumber } from '../random-functions'

class Home extends React.Component {
    static contextType = SpeedScheduleContext
  
    constructor(props) {
        super(props)
        this.state = {
          nearestEvent: ''
        }
    }

    componentDidMount() {
      let nearestEvent = ''
      this.context.scheduledEvents.map(schedEvent => {
        if (!nearestEvent) {
          return nearestEvent = schedEvent
        }
        
        const savedDateArr = nearestEvent.date.split(' ')
        const currDateArr = schedEvent.date.split(' ')
        
        const savedYear = Number(savedDateArr[2])
        const currYear = Number(currDateArr[2])
        
        if (currYear < savedYear) {
          return nearestEvent = schedEvent
        }

        const savedMonth = switchMonthToNumber(savedDateArr[0])
        const currMonth = switchMonthToNumber(currDateArr[0])

        if (currMonth < savedMonth) {
          return nearestEvent = schedEvent
        }

        const savedDay = switchDayToNumber(savedDateArr[1])
        const currDay = switchDayToNumber(currDateArr[1])

        if (currDay < savedDay) {
          return nearestEvent = schedEvent
        }

        const savedStartTime = Number(nearestEvent.start_time)
        const currStartTime = Number(schedEvent.start_time)

        if (currStartTime < savedStartTime) {
          return nearestEvent = schedEvent
        }
      })

      this.setState({
        nearestEvent: nearestEvent
      })
    }

    handleClickEvents = () => {
      this.props.history.push('/events')
    }

    handleCalendarClick = () => {
      this.context.setDateState(new Date())
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
                <p>{this.state.nearestEvent.date}</p>
                <p>{this.state.nearestEvent.start_time}</p>
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