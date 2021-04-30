import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'
import './DailyTable.css'

class DailyTable extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        console.log(this.props)

        const startTimes = []
        const endTimes = []

        this.props.propsObj.scheduledEvents.map(schedEvent => {
            return (
                startTimes.push(schedEvent.start_time),
                endTimes.push(schedEvent.end_time)
            )
            
        })

        const tableData = []
        for(let i = 0; i <= 23; i++) {
            let militaryTime = ''
            if (i === 0) {
                militaryTime = "0000"
            }
            if (i > 0 && i < 10 ) {
               const time = i * 100
               militaryTime = `0${time}`
            }
            if (i >= 10) {
                militaryTime = `${i * 100}`
            }
            if (startTimes.includes(militaryTime)) {
                const schedEvent = this.props.propsObj.scheduledEvents.filter(schedEvent => schedEvent.start_time === militaryTime)
                const eventObj = this.context.events.filter(eventObj => eventObj.event_id === schedEvent[0].event_id)
                console.log(eventObj)

                tableData.push(
                    <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>{eventObj[0].event_name}</td>
                    </tr>
                )
            } else {
                tableData.push(
                    <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td></td>
                    </tr>
                )
            }
           
        }

        console.log(startTimes, endTimes)
        console.log(tableData)

        return (
            <table>
                <thead>
                  <h2>{this.props.propsObj.date}</h2>
                </thead>
                <tr>
                  <th>Time</th>
                  <th>Events</th>
                </tr>
                {/* <tr className="sched-row" id="0000-row">
                    <td className="time-column" id="0000">12am</td>
                </tr>
                <tr className="sched-row" id="0100-row">
                    <td className="time-column" id="0100">1am</td>
                    
                </tr>
                <tr className="sched-row" id="0200-row">
                    <td className="time-column" id="0200">2am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0300-row">
                    <td className="time-column" id="0300">3am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0400-row">
                    <td className="time-column" id="0400">4am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0500-row">
                    <td className="time-column" id="0500">5am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0600-row">
                    <td className="time-column" id="0600">6am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0700-row">
                    <td className="time-column" id="0700">7am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0800-row">
                    <td className="time-column" id="0800">8am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0900-row">
                    <td className="time-column" id="0900">9am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1000-row">
                    <td className="time-column" id="1000">10am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1100-row">
                    <td className="time-column" id="1100">11am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1200-row">
                    <td className="time-column" id="1200">12pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1300-row">
                    <td className="time-column" id="1300">1pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1400-row">
                    <td className="time-column" id="1400">2pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1500-row">
                    <td className="time-column" id="1500">3pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1600-row">
                    <td className="time-column" id="1600">4pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1700-row">
                    <td className="time-column" id="1700">5pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1800-row">
                    <td className="time-column" id="1800">6pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="1900-row">
                    <td className="time-column" id="1900">7pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="2000-row">
                    <td className="time-column" id="2000">8pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="2100-row">
                    <td className="time-column" id="2100">9pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="2200-row">
                    <td className="time-column" id="2200">10pm</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="2300-row">
                    <td className="time-column" id="2300">11pm</td>
                    <td className="sched-column"></td>
                </tr> */}
                {tableData}

                
            </table>
        )
    }
}

export default DailyTable