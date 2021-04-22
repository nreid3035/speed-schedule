import moment from 'moment'
import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'

class ScheduleEvent extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSchedEventSubmit = (e) => {
        e.preventDefault()
        const newScheduledEvent = {
            sched_event_id: this.context.scheduledEvents.length + 1,
            event_id: Number(e.target['select-event'].value),
            date: moment(e.target['date'].value).format('MMM Do YYYY'),
            start_time: e.target['start-time'].value,
            end_time: e.target['end-time'].value
        }

    console.log(newScheduledEvent)
    this.context.handleSchedEventStateChange(newScheduledEvent)
    this.props.history.push('/home')
    }

    render() {

        const options = this.context.events.map(eventObj => {
            return (
                <option value={eventObj.event_id}>{eventObj.event_name}</option>
            )
        })

        return (
            <form onSubmit={(e) => this.handleSchedEventSubmit(e)}>
                <label htmlFor="date" className="sched-event-label">Date (MM/DD/YYY):</label>
                <input type="text" name="date" id="date" className="sched-event-input" />
                <label htmlFor="start-time" className="sched-event-label">Start Time:</label>
                <input type="text" name="start-time" id="start-time" className="sched-event-input" />
                <label htmlFor="end-time" className="sched-event-label">End Time:</label>
                <input type="text" name="end-time" id="end-time" className="sched-event-input" />
                <label htmlFor="event" className="sched-event-label">Event</label>
                <select id="select-event">
                    {options}
                </select>
                <button type="submit" className="sched-event-submit">Submit</button>
            </form>
        )
    }
}

export default ScheduleEvent