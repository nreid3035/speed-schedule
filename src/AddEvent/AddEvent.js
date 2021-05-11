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
        const hours = Number(e.target['hours'].value) * 60
        const minutes = Number(e.target['minute-select'].value)
        const duration = hours + minutes
        if (duration <= 0) {
            return console.log("error time must not be 0 or less")
        }
        console.log(duration) 
        const newEvent = {
            event_id: this.context.events.length + 1,
            event_name: e.target['event-title'].value,
            duration: duration,
            notes: e.target['notes'].value
        }

        this.context.handleAddEventStateChange(newEvent)
        this.props.history.push('/events')
    }

    render() {
        let minuteOptions = []
        

        for (let i = 0; i < 60; i+=15) {
            minuteOptions.push(
                <option className="minute-option" value={i}>{`${i} minutes`}</option>
            )
        }

        return (
          <>
            <h2>Add Event</h2>
            <form className="add-event-form" onSubmit={(e) => this.handleAddEventSubmit(e)}>
                <label htmlFor="event-title" className="add-event-label">Event Title</label>
                <input type="text" name="event-title" id="event-title" className="add-event-input" required/>
                <label htmlFor="hours" className="add-event-label">Hours</label>
                <input type="number" name="hours" id="hours" placeholder="hours" className="add-event-input"/>
                <label htmlFor="minutes" className="add-event-label">Minutes (approx.)</label>
                <select name="minutes" id="minute-select">
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