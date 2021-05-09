import React from 'react'
import Event from '../Event/Event'
import './EventView.css'
import SpeedScheduleContext from '../SpeedScheduleContext'

class EventView extends React.Component {
    static contextType = SpeedScheduleContext
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleBackClick = () => {
        this.props.history.goBack()
    }

    handleDeleteEvent = (eventId) => {
        console.log(eventId)
        this.context.deleteEventFromState(eventId)
        this.props.history.push('/events')
    }

    render() {

        const eventId = Number(this.props.match.params.eventId)
        const event = this.context.events.filter(eventObj => eventObj.event_id === eventId)
        return (
            <>
              <div className="event-view-buttons-container">
                <button onClick={() => this.handleBackClick()} className="event-view-button">Back</button>
                <button onClick={() => this.handleDeleteEvent(event[0].event_id)} className="event-view-button">Delete</button>
              </div>
              <Event eventObj={event[0]} />
            </>
        )
    }
}

export default EventView