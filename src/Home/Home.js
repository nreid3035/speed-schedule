import React from 'react'
import { Link } from 'react-router-dom'
import SpeedScheduleContext from '../SpeedScheduleContext'

class Home extends React.Component {
    static contextType = SpeedScheduleContext
  
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleTodayClick = () => {
      this.context.setDateState(new Date())
      this.props.history.push('/daily-schedule')
    }

    render() {
        return (
            <>
            <h2>User's Next Scheduled Event</h2>
            <div>
                <p>event</p>
            </div>
            <Link to={'/add-event'}>
              <button>Add Event</button>
            </Link>
            <Link to={'/schedule-event'}>
              <button>Schedule Event</button>
            </Link>
            <div className="bottom-nav-bar">
                <Link to={'/events'}>
                  <button>Events</button>
                </Link>
                <button onClick={() => this.handleTodayClick()}>Today's Schedule</button>
                <Link to={'/calendar'}>
                  <button>Calendar</button>
                </Link>        
            </div>
            </>
        )
    }
}

export default Home