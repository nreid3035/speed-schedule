import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'
import TimeBlock from '../TimeBlock/TimeBlock'
import SpeedScheduleContext from '../SpeedScheduleContext'
import DailyTable from '../DailyTable/DailyTable'

class DailySchedule extends React.Component {
    static contextType = SpeedScheduleContext

    constructor(props) {
        super(props)
        this.state = {
            scheduledEvents: [],
            month: 0,
            day: 0,
            year: 0
        }
    } 

    componentDidMount() {
        
        const scheduledEvents = this.context.scheduledEvents.filter(schedObj => schedObj.date === moment(this.context.date).format('MMM Do YYYY'))

        this.setState({
            month: new Date(this.context.date).getMonth(),
            day: new Date(this.context.date).getDate(),
            year: new Date(this.context.date).getFullYear(),
            scheduledEvents: [...scheduledEvents]
        })
    }

    switchDownAYear = () => {
        this.setState({
            year: this.state.year - 1,
            month: 11,
            day: 31
        })
    }

    switchDownAMonth = () => {
        this.setState({
           month: this.state.month - 1 
        })

        switch(this.state.month - 1) {
            case 0: 
              this.setState({
                  day: 31
              });
              break;
            case 1: 
              if (this.state.year % 4 === 0) {
                  this.setState({
                      day: 29
                  })
              } else {
                  this.setState({
                      day: 28
                  })
              }
              break;
            case 2: 
              this.setState({
                  day: 31
              })
              break;
            case 3: 
              this.setState({
                  day: 30
              });
              break;
            case 4: 
              this.setState({
                  day: 31
              });
              break;
            case 5: 
              this.setState({
                  day: 30
              });
              break;
            case 6: 
              this.setState({
                  day: 31
              });
              break;
            case 7: 
              this.setState({
                  day: 31
              });
              break;
            case 8: 
              this.setState({
                  day: 30
              });
              break;
            case 9: 
              this.setState({
                  day: 31
              });
              break;
            case 10: 
              this.setState({
                  day: 30
              });
              break;
            case 11: 
              this.setState({
                  day: 31
              });
              break;
        }
    }
    
    handleLeftButtonClick = () => {
        if (this.state.month === 0 && this.state.day === 1) {
            this.switchDownAYear()
            return
        }

        if (this.state.day === 1) {
            this.switchDownAMonth()
            return 
        }

        this.setState({
            day: this.state.day - 1
        }) 
        console.log(this.state)
    }

    handleRightButtonClick = () => {
        switch(this.state.day) {
            case 28: 
              if (this.state.month === 1 && (this.state.year % 4) !== 0) {
                  this.setState({
                      month: this.state.month + 1,
                      day: 1
                  })
                  break;
              } else {
                  this.setState({
                      day: this.state.day + 1,   
                  })
                  break;
              }
            case 29:
              if (this.state.month === 1) {
                  this.setState({
                      month: this.state.month + 1,
                      day: 1
                  })
                  break;
              } else {
                  this.setState({
                      day: this.state.day + 1
                  })
                  break;
              }
            case 30: 
              switch(this.state.month) {
                  case 0:
                    this.setState({
                        day: this.state.day + 1
                    })
                    break;
                  case 2: 
                    this.setState({
                        day: this.state.day + 1  
                    })
                    break;
                  case 3: 
                    console.log(this.state)
                    this.setState({
                        day: 1,
                        month: this.state.month + 1
                    })
                    console.log(this.state)
                    break;
                  case 4: 
                    this.setState({
                        day: this.state.day + 1
                    })
                    break;
                  case 5: 
                    this.setState({
                        month: this.state.month + 1,
                        day: 1
                    })
                    break;
                  case 6:
                    this.setState({
                        day: this.state.day + 1
                    })
                    break;
                  case 7: 
                    this.setState({
                        day: this.state.day + 1
                    })
                    break;
                  case 8: 
                    this.setState({
                        month: this.state.month + 1,
                        day: 1
                    })
                    break;
                  case 9: 
                    this.setState({
                        day: this.state.day + 1
                    })
                    break;
                  case 10: 
                    this.setState({
                        month: this.state.month + 1,
                        day: 1
                    })
                    break;
                  case 11: 
                    this.setState({
                       day: this.state.day + 1 
                    })
                    break;
              }
              break;
            case 31:
              if (this.state.month === 11) {
                  this.setState({
                      year: this.state.year + 1,
                      month: 0,
                      day: 1
                  })
                  break
              } else {
                this.setState({
                    month: this.state.month + 1,
                    day: 1
                })
                break;
              } 
              default: 
                this.setState({
                    day: this.state.day + 1
                }) 
            }
        }
    


    render() {        
        
        let month = this.state.month
        const day = this.state.day
        const year = this.state.year
        switch(month) {
            case 0: 
              month = "Jan";
              break;
            case 1: 
              month = "Feb";
              break;
            case 2:
              month = "Mar";
              break;
            case 3:
              month = "Apr";
              break;
            case 4:
              month = "May";
              break;
            case 5:
              month = "Jun";
              break;
            case 6:
              month = "Jul";
              break;
            case 7: 
              month = "Aug";
              break;
            case 8: 
              month = "Sep";
              break;
            case 9:
              month = "Oct";
              break;
            case 10: 
              month = "Nov";
              break;
            case 11:
              month = "Dec"
              break;
            default: 
              month = ""
              break;
        }
        const date = `${month} ${day}, ${year}`

        // AFTER RENDER, LOOP THROUGH DATA, MAKE TD ELEMENTS THAT CORRESPOND WITH TIMES, APPEND THOSE ELEMENTS TO THE MATCHING TR ELEMENTS
        
        
        return (
            <>
            <button onClick={() => this.handleLeftButtonClick()}>Left</button>
            <button onClick={() => this.handleRightButtonClick()}>Right</button>

            <DailyTable propsObj={{
                date: date,
                scheduledEvents: this.state.scheduledEvents
            }} />
            </>
        )
    }
}

export default DailySchedule