import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarPage.css'
import SpeedScheduleContext from '../SpeedScheduleContext'



class CalendarPage extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {
            infoBox: false,
            date: new Date(),
            dailyInfo: {
                firstEventTime: 'N/A',
                numOfEvents: 0,
            }
        }
    }

    toggleInfoBox = () => {
        this.setState({
            infoBox: !this.state.infoBox
        })
    }
    
    handleCalendarChange = (e) =>{
        console.log(e)
        this.context.setDateState(e)
        if (this.state.infoBox === true) {
            this.toggleInfoBox()
        }
    }

    getDailyInfo = () => {
        console.log(this.state.date)
        if (this.state.infoBox === true) {
            this.toggleInfoBox()
            return
        }
        console.log('line 45 hit, no return')
        this.toggleInfoBox()
        const todaysEvents = this.context.scheduledEvents.filter(eventObj => eventObj.date === moment(this.context.date).format('MMM Do YYYY'))
        if (!todaysEvents.length) {
            return this.setState({
                dailyInfo: {
                    firstEventTime: 'N/A',
                    numOfEvents: 0,
                }
            })
        }
        const startTimes = todaysEvents.map(eventObj => {
            return Number(eventObj.start_time)
        })
        const earliestStart = Math.min(...startTimes)
        console.log(startTimes)
        console.log(earliestStart)
        this.setState({
            dailyInfo: {
                firstEventTime: earliestStart,
                numOfEvents: todaysEvents.length,
            }
        })
    }

    render() {
        let infoBox = null
        console.log(this.context)

        if (this.state.infoBox) {
            infoBox = <div className="info-box">
                        <h2>Info for this date:</h2>
                        <p>Number of Events: {this.state.dailyInfo.numOfEvents}</p>
                        <p>First Event Start Time: {this.state.dailyInfo.firstEventTime}</p>
                      </div>
        }
        return (
            <>
                <Calendar 
                    onChange={(e) => this.handleCalendarChange(e)}
                    value={this.context.date}/>
                    <p>{moment(this.context.date).format('MMMM Do YYYY')}</p>
                    <button onClick={() => this.getDailyInfo()} className="calendar-button">See Whats Going on this Day</button>
                    <Link to={'/daily-schedule'} className="daily-view-link">
                      <button className="calendar-button">View in Daily Schedule</button>
                    </Link>
                    {infoBox}
            </>
        )
    }
}

export default CalendarPage