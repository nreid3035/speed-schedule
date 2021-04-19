import React from 'react'
import Event from '../Event/Event'
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
                <Event eventObj={obj} key={idx}/>
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