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
            <div className="bottom-nav-bar">
                <Link to={'/events'}>
                  <h3>Events</h3>
                </Link>
                <h3>Today's Schedule</h3>
                <h3>Calendar</h3>
            </div>
            </>
        )
    }
}

export default Home