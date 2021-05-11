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
        let hour = Number(e.target['sched-hour-select'].value)
        const minutes = e.target['sched-minute-select'].value
        if (e.target['am-pm-select'].value === 'pm') {
            hour += 12
        }
        const startTime = `${hour}${minutes}`
        console.log(startTime)
        const newScheduledEvent = {
            sched_event_id: this.context.scheduledEvents.length + 1,
            event_id: Number(e.target['select-event'].value),
            date: moment(e.target['date'].value).format('MMM Do YYYY'),
            start_time: startTime
        }

    console.log(newScheduledEvent)
    this.context.handleSchedEventStateChange(newScheduledEvent)
    this.props.history.push('/home')
    }

    render() {

        let hoursOptions = []
        let minuteOptions = []

        for (let i = 0; i <= 12; i++) {
            hoursOptions.push(
                <option className="sched-hour-option" value={i}>{`${i}`}</option>
            )
        }

        for (let i = 0; i < 60; i+=15) {
            minuteOptions.push(
                <option className="sched-minute-option sched-option" value={i}>{`${i}`}</option>
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
                <input type="date" name="date" id="date" className="sched-event-input" />
                <label htmlFor="start-time" className="sched-event-label">Start Time:</label>
                <div>
                    <select  id="sched-hour-select">
                        {hoursOptions}
                    </select>
                    <select id="sched-minute-select">
                        {minuteOptions}
                    </select>
                    <select id="am-pm-select">
                        <option className="am-pm" value="am">AM</option>
                        <option className="am-pm" value="pm">PM</option>
                    </select>
                </div>
                <label htmlFor="event" className="sched-event-label">Event</label>
                <select id="select-event">
                    <option value={null}>Select Event</option>
                    {options}
                </select>
                <button type="submit" className="sched-event-submit">Submit</button>
            </form>
          </>

        )
    }
}

export default ScheduleEvent