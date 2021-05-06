import React from 'react'
import SpeedScheduleContext from '../SpeedScheduleContext'
import './DailyTable.css'

class DailyTable extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props) 
        this.state = {
            activeBlock: "",
            processedDuration: 0
        }
    }

    componentDidMount() {
        
    }

    resetState = () => {
        this.setState({
            activeBlock: "",
            processedDuration: 0
        })
    }

    setActiveBlock = (startTime) => {
        this.setState({
           activeBlock: startTime 
        })
    }

    addToProcessedDuration = (processedDuration) => {
        this.setState({
            processedDuration: this.state.processedDuration += processedDuration
        })
    }

    render() {
        console.log(this.props)

        const startTimes = []
        const endTimes = []
        const startHours = []
        let activeBlock = false
        let processedDuration = 0
        let activeStartTime = ""

        this.props.propsObj.scheduledEvents.map(schedEvent => {
            return (
                startTimes.push(schedEvent.start_time),
                endTimes.push(schedEvent.end_time)
            )
            
        })

        startTimes.map(time => {
            startHours.push(time.slice(0,2))
        })
        console.log(startHours)

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

            if (activeBlock === true) {
                const schedEvent = this.props.propsObj.scheduledEvents.filter(schedEvent => schedEvent.start_time === activeStartTime)
                const eventObj = this.context.events.filter(eventObj => eventObj.event_id === schedEvent[0].event_id)
                const timeLeft = eventObj[0].duration - processedDuration 

                if (timeLeft > 60) {
                    processedDuration += 60
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>{eventObj[0].event_name}</td>
                      </tr> 
                    )
                } 

                if (timeLeft === 60) {
                    activeBlock = false
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>{eventObj[0].event_name}</td>
                      </tr> 
                    )
                }

                if (timeLeft === 45) {
                    activeBlock = false
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>
                          <div>{eventObj[0].event_name}</div>
                          <div>{eventObj[0].event_name}</div>
                          <div>{eventObj[0].event_name}</div>
                          <div></div>
                        </td>
                      </tr>
                    )
                }

                if (timeLeft === 30) {
                    activeBlock = false
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>
                          <div>{eventObj[0].event_name}</div>
                          <div></div>
                        </td>
                      </tr> 
                    )
                }

                if (timeLeft === 15) {
                    activeBlock = false
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{militaryTime}</td>
                        <td>
                          <div>{eventObj[0].event_name}</div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </td>
                      </tr>
                    )
                }

            }
            if (startHours.includes(militaryTime.slice(0, 2)) && activeBlock === false) {
                console.log("line 154, starthours.includes(militaryTime.slice)")
                const idx = startHours.indexOf(militaryTime.slice(0, 2))
                const startTime = startTimes[idx]
                const schedEvent = this.props.propsObj.scheduledEvents.filter(schedEvent => schedEvent.start_time === startTime)
                const eventObj = this.context.events.filter(eventObj => eventObj.event_id === schedEvent[0].event_id)
                console.log(eventObj)
                
                if (schedEvent[0].start_time.slice(2) === "00") {
                    if (eventObj[0].duration > 60) {
                        activeBlock = true
                        activeStartTime = schedEvent[0].start_time
                        processedDuration += 60
                        tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                          <td className="time-column" id={militaryTime}>{militaryTime}</td>
                          <td>{eventObj[0].event_name}</td>
                        </tr>
                        )
                    }
                } else if (schedEvent[0].start_time.slice(2) === "15") {
                    if (eventObj[0].duration > 45) {
                        activeBlock = true
                        activeStartTime = schedEvent[0].start_time
                        processedDuration += 45
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{militaryTime}</td>
                            <td>
                                <div></div>
                                <div>{eventObj[0].event_name}</div>
                                <div>{eventObj[0].event_name}</div>
                                <div>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    }
                } else if (schedEvent[0].start_time.slice(2) === "30") {
                    if (eventObj[0].duration > 30) {
                        activeBlock = true
                        activeStartTime = schedEvent[0].start_time
                        processedDuration += 30
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{militaryTime}</td>
                            <td>
                                <div></div>
                                <div>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    }
                } else if (schedEvent[0].start_time.slice(2) === "45") {
                    if (eventObj[0].duration > 15) {
                        activeBlock = true
                        activeStartTime = schedEvent[0].start_time
                        processedDuration += 15
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{militaryTime}</td>
                            <td>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    }
                }

                // tableData.push(
                //     
                // )
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
                  <h2 className="daily-table-date">{this.props.propsObj.date}</h2>
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