import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'

class ScheduledEventPage extends React.Component {
    static contextType = SpeedScheduleContext
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        const schedId = Number(this.props.match.params.schedId)
        const schedEvent = this.context.scheduledEvents.filter(schedEvent => schedEvent.sched_event_id === schedId)
        const eventObj = this.context.events.filter(eventCard => eventCard.event_id === schedEvent[0].event_id)
        return (

            <p>{eventObj[0].event_name}</p>
            
        )
    }
}

export default ScheduledEventPage