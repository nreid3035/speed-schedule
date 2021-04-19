import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'

class AddEvent extends React.Component {
    
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleAddEventSubmit = (e) => {
        e.preventDefault()
        const newEvent = {
            event_id: this.context.events.length + 1,
            event_name: e.target['event-title'].value,
            duration: e.target['duration'].value,
            notes: e.target['notes'].value
        }

        this.context.handleAddEventStateChange(newEvent)
        this.props.history.push('/events')
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleAddEventSubmit(e)}>
                <label htmlFor="event-title" className="add-event-label">Event Title</label>
                <input type="text" name="event-title" id="event-title" className="add-event-input" />
                <label htmlFor="duration" className="add-event-label">Duration (minutes)</label>
                <input type="text" name="duration" id="duration" className="add-event-input" />
                <label htmlFor="notes" className="add-event-label">Notes</label>
                <textarea name="notes" id="notes" placeholder="Type notes here..."/>
                <button type="submit" className="add-event-submit">Submit</button>
            </form>
        )
    }
}

export default AddEvent