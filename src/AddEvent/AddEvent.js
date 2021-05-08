import React from 'react'
import './AddEvent.css'
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
            duration: Number(e.target['duration'].value),
            notes: e.target['notes'].value
        }

        this.context.handleAddEventStateChange(newEvent)
        this.props.history.push('/events')
    }

    render() {
        let minuteOptions = []
        let hoursOptions = []

        for (let i = 0; i < 60; i+=15) {
            minuteOptions.push(
                <option className="minute-option" value={i}>{`${i} minutes`}</option>
            )
        }

        for (let i = 0; i <= 8; i++) {
            hoursOptions.push(
                <option className="hours-option" value={i}>{`${i} hr`}</option>
            )
        }

        return (
          <>
            <h2>Add Event</h2>
            <form className="add-event-form" onSubmit={(e) => this.handleAddEventSubmit(e)}>
                <label htmlFor="event-title" className="add-event-label">Event Title</label>
                <input type="text" name="event-title" id="event-title" className="add-event-input" />
                <label htmlFor="duration" className="add-event-label">Duration (approx)</label>
                <select>
                    {hoursOptions}
                </select>
                <select>
                    {minuteOptions}
                </select>
                <label htmlFor="notes" className="add-event-label">Notes</label>
                <textarea name="notes" id="notes" className="notes" placeholder="Type notes here..."/>
                <button type="submit" className="add-event-submit">Submit</button>
            </form>
          </>
        
        )
    }
}

export default AddEvent