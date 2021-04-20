import moment from 'moment'
import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

class CalendarPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    calendarDateChange = (newDate) => {
        this.setState({
            date: newDate
        })
    }

    render() {
        return (
            <div>
                <Calendar 
                    onChange={this.calendarDateChange}
                    value={this.state.date}/>
                    <p>{moment(this.state.date).format('MMMM Do YYYY')}</p>
            </div>
        )
    }
}

export default CalendarPage