import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import SpeedScheduleContext from '../SpeedScheduleContext'



class CalendarPage extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            dailyInfo: {
                firstEventTime: '',
                numOfEvents: 0,
                endOfDay: ''
            }
        }
    }

    getDailyInfo = () => {
        console.log(this.state.date)
        const todaysEvents = this.context.scheduledEvents.filter(eventObj => eventObj.date === moment(this.context.date).format('MMM Do YYYY'))
        if (!todaysEvents.length) {
            return this.setState({
                dailyInfo: {
                    firstEventTime: '',
                    numOfEvents: 0,
                    endOfDay: ''
                }
            })
        }
        const startTimes = todaysEvents.map(eventObj => {
            return Number(eventObj.start_time)
        })
        const earliestStart = Math.min(...startTimes)
        const endTimes = todaysEvents.map(eventObj => {
            return Number(eventObj.end_time)
        })
        const endOfDay = Math.max(...endTimes)
        console.log(startTimes)
        console.log(earliestStart)
        this.setState({
            dailyInfo: {
                firstEventTime: earliestStart,
                numOfEvents: todaysEvents.length,
                endOfDay: endOfDay
            }
        })
    }

    render() {
        console.log(this.context)

        return (
            <>
                <Calendar 
                    onChange={this.context.setDateState}
                    value={this.context.date}/>
                    <p>{moment(this.context.date).format('MMMM Do YYYY')}</p>
                    <button onClick={() => this.getDailyInfo()}>See Whats Going on this Day</button>
                    <div className="hidden">
                        <h2>Info for this date:</h2>
                        <p>Number of Events: {this.state.dailyInfo.numOfEvents}</p>
                        <p>First Event Start Time: {this.state.dailyInfo.firstEventTime}</p>
                        <p>Last Event End Time: {this.state.dailyInfo.endOfDay}</p>
                    </div>
                    <Link to={'/daily-schedule'}>
                      <button>View in Daily Schedule</button>
                    </Link>
            </>
        )
    }
}

export default CalendarPage