import moment from 'moment'
import React from 'react'
import './ScheduleEvent.css'
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

        let hoursOptions = []
        let minuteOptions = []

        for (let i = 0; i <= 23; i++) {
            if (i === 0) {
                hoursOptions.push(
                    <options className="sched-hour-option" value={i}>12 am</options>
                )
            } else if (i > 0 && i < 12) {
                hoursOptions.push(
                    <option className="sched-hour-option" value={i}>{`${i} am`}</option>
                )
            } else {
                hoursOptions.push(
                    <option className="sched-hour-option sched-option" value={i}>{`${i - 12} pm`}</option>
                )
            }
        }

        for (let i = 0; i < 60; i+=15) {
            minuteOptions.push(
                <option className="sched-minute-option sched-option" value={i}>{`${i} minutes`}</option>
            )
        }

        const options = this.context.events.map(eventObj => {
            return (
                <option className="event-option" value={eventObj.event_id}>{eventObj.event_name}</option>
            )
        })

        return (
          <>
            <form className="schedule-event-form" onSubmit={(e) => this.handleSchedEventSubmit(e)}>
                <label htmlFor="date" className="sched-event-label">Date (MM/DD/YYYY):</label>
                <input type="text" name="date" id="date" className="sched-event-input" />
                <label htmlFor="start-time" className="sched-event-label">Start Time:</label>
                <div>
                    <select>
                        {hoursOptions}
                    </select>
                    <select>
                        {minuteOptions}
                    </select>
                </div>
                <label htmlFor="event" className="sched-event-label">Event</label>
                <select id="select-event">
                    {options}
                </select>
                <button type="submit" className="sched-event-submit">Submit</button>
            </form>
          </>

        )
    }
}

export default ScheduleEvent