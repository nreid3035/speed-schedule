import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'

class TimeBlock extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const eventObj = this.context.events.filter(eventObj => eventObj.event_id === this.props.schedObj.event_id)
        const eventName = eventObj.event_name
        return (
            <td>
              {eventName}
            </td>
        )
    }
}

export default TimeBlock