import React from 'react'
import Event from '../Event/Event'
import { Link } from 'react-router-dom'
import SpeedScheduleContext from '../SpeedScheduleContext'

class EventsList extends React.Component {
    
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    render() {
        const eventComponents = this.context.events.map((obj, idx) => {
            return (
              <Link to={`/event-view/${obj.event_id}`}>
                <Event eventObj={obj} key={idx}/>
              </Link>

            )
        })

        return (
            <div>
              {eventComponents}
            </div>
        )
    }
}

export default EventsList