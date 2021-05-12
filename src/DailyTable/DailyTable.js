import React from 'react'
import { Link } from 'react'
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

    linkToScheduledEventPage = (schedId) => {
      this.props.propsObj.history.push(`/scheduled-events/${schedId}`)
    }

    handleMilitaryTime = (militaryTime) => {
        let result = null
        switch(militaryTime) {
            case "0000": 
              result = "12 am";
              break;
            case "0100":
              result = "1 am";
              break;
            case "0200": 
              result = "2 am";
              break;
            case "0300":
              result = "3 am";
              break;
            case "0400":
              result = "4 am";
              break;
            case "0500":
              result = "5 am";
              break;
            case "0600":
              result = "6 am";
              break;
            case "0700":
              result = "7 am";
              break;
            case "0800":
              result = "8 am";
              break;
            case "0900":
              result = "9 am";
              break;
            case "0900":
              result = "9 am";
              break;
            case "1000":
              result = "10 am";
              break;
            case "1100":
              result = "11 am";
              break;
            case "1200":
              result = "12 pm";
              break;
            case "1300":
              result = "1 pm";
              break;
            case "1400":
              result = "2 pm";
              break;
            case "1500":
              result = "3 pm";
              break;
            case "1600":
              result = "4 pm";
              break;
            case "1700":
              result = "5 pm";
              break;
            case "1800":
              result = "6 pm";
              break;
            case "1900":
              result = "7 pm";
              break;
            case "2000":
              result = "8 pm";
              break;
            case "2100":
              result = "9 pm";
              break;
            case "2200":
              result = "10 pm";
              break;
            case "2300":
              result = "11 pm";
              break;  
        }
        return result
    }

    render() {
        console.log(this.props)

        const startTimes = []
        const endTimes = []
        const startHours = []
        let activeBlock = false
        let killBlock = false
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
            killBlock = false
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
                const schedId = schedEvent[0].sched_event_id

                if (timeLeft > 60) {
                    processedDuration += 60
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                          <td className="event-table-data" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</td>
                      </tr> 
                    )
                } 

                if (timeLeft === 60) {
                    activeBlock = false
                    killBlock = true
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                        <td className="event-table-data" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</td>
                      </tr> 
                    )
                }

                if (timeLeft === 45) {
                    activeBlock = false
                    killBlock = true
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                      <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                        <td className="event-table-data">
                          <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                          <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                          <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                          <div className="data-div-quarter"></div>
                        </td>
                      </tr>
                    )
                }

                if (timeLeft === 30) {
                    activeBlock = false
                    killBlock = true
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                        <td className="event-table-data">
                          <div className="data-div-half" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                          <div className="data-div-half"></div>
                        </td>
                      </tr> 
                    )
                }

                if (timeLeft === 15) {
                    activeBlock = false
                    killBlock = true
                    activeStartTime = ""
                    processedDuration = 0
                    tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                        <td className="event-table-data">
                          <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                          <div className="data-div-quarter"></div>
                          <div className="data-div-quarter"></div>
                          <div className="data-div-quarter"></div>
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
                const schedId = schedEvent[0].sched_event_id
                const eventObj = this.context.events.filter(eventObj => eventObj.event_id === schedEvent[0].event_id)
                console.log(eventObj)
                
                if (schedEvent[0].start_time.slice(2) === "00") {
                    if (eventObj[0].duration > 60) {
                        activeBlock = true
                        activeStartTime = schedEvent[0].start_time
                        processedDuration += 60
                        tableData.push(
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                          <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                          <td className="event-table-data" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</td>
                        </tr>
                        )
                    } else if (eventObj[0].duration === 60) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</td>
                          </tr> 
                        )
                    } else if (eventObj[0].duration === 45) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter"></div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 30) {
                        tableData.push(
                            <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-half" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-half"></div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 15) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                            </td>
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
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 45) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 30) {
                        tableData.push(
                            <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter"></div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 15) {
                        tableData.push(
                            <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter`"></div>
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
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-half"></div>
                                <div className="data-div-half" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 30) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-half"></div>
                                <div className="data-div-half" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 15) {
                        tableData.push(
                          <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                                <div className="data-div-quarter"></div>
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
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                          </tr>
                        )
                    } else if (eventObj[0].duration === 15) {
                        <tr className="sched-row" id={`${militaryTime}-row`}>
                            <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                            <td className="event-table-data">
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter"></div>
                                <div className="data-div-quarter" onClick={() => this.linkToScheduledEventPage(schedId)}>{eventObj[0].event_name}</div>
                            </td>
                        </tr>
                    }
                }

            } 
            
            if (!startHours.includes(militaryTime.slice(0, 2)) && activeBlock === false && killBlock === false) {
                tableData.push(
                    <tr className="sched-row" id={`${militaryTime}-row`}>
                        <td className="time-column" id={militaryTime}>{this.handleMilitaryTime(militaryTime)}</td>
                        <td className="event-table-data"></td>
                    </tr>
                )
            }
           
        }

        console.log(tableData)

        return (
            <table>
                <thead>
                  <h2 className="daily-table-date">{this.props.propsObj.date}</h2>
                </thead>
                <tr>
                  <th className="time-column">Time</th>
                  <th className="event-table-data">Events</th>
                </tr>
                {/* <tr className="sched-row" id="0000-row">
                    <td className="time-column" id="0000">12am</td>
                </tr>
                <tr className="sched-row" id="0100-row">
                    <td className="time-column" id="0100">1am</td>
                    
                </tr>
                <tr className="sched-row" id="0200-row">
                    <td className="time-column" id="0200">2am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0300-row">
                    <td className="time-column" id="0300">3am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0400-row">
                    <td className="time-column" id="0400">4am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0500-row">
                    <td className="time-column" id="0500">5am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0600-row">
                    <td className="time-column" id="0600">6am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0700-row">
                    <td className="time-column" id="0700">7am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0800-row">
                    <td className="time-column" id="0800">8am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="0900-row">
                    <td className="time-column" id="0900">9am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1000-row">
                    <td className="time-column" id="1000">10am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1100-row">
                    <td className="time-column" id="1100">11am</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1200-row">
                    <td className="time-column" id="1200">12pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1300-row">
                    <td className="time-column" id="1300">1pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1400-row">
                    <td className="time-column" id="1400">2pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1500-row">
                    <td className="time-column" id="1500">3pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1600-row">
                    <td className="time-column" id="1600">4pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1700-row">
                    <td className="time-column" id="1700">5pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1800-row">
                    <td className="time-column" id="1800">6pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="1900-row">
                    <td className="time-column" id="1900">7pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="2000-row">
                    <td className="time-column" id="2000">8pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="2100-row">
                    <td className="time-column" id="2100">9pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="2200-row">
                    <td className="time-column" id="2200">10pm</td>
                    <td className="event-table-data"></td>
                </tr>
                <tr className="sched-row" id="2300-row">
                    <td className="time-column" id="2300">11pm</td>
                    <td className="event-table-data"></td>
                </tr> */}
                {tableData}

                
            </table>
        )
    }
}

export default DailyTable