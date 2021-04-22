import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
                  <h3>Events</h3>
                </Link>
                <Link to={'/daily-schedule'}>
                  <h3>Today's Schedule</h3>
                </Link>
                <Link to={'/calendar'}>
                  <h3>Calendar</h3>
                </Link>
                
            </div>
            </>
        )
    }
}

export default Home