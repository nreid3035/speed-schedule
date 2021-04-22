import moment from 'moment'
import React from 'react'

class DailySchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: moment(new Date()).format('MMM Do YYYY'),
            month: new Date().getMonth(),
            day: new Date().getDate(),
            year: new Date().getFullYear()
        }
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
  
        console.log(this.state.month)
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
        console.log(this.state)
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
        }
        const date = `${month} ${day}, ${year}`


        
        return (
            <>
            <button onClick={() => this.handleLeftButtonClick()}>Left</button>
            <button onClick={() => this.handleRightButtonClick()}>Right</button>

            <table>
                <tr>
                    <th>{date}</th>
                </tr>
                <tr className="sched-row" id="2400-row">
                    <td className="time-column" id="2400">12am</td>
                    <td className="sched-column"></td>
                </tr>
                <tr className="sched-row" id="0100-row">
                    <td className="time-column" id="0100">1am</td>
                    <td className="sched-column"></td>
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
                </tr>

                
            </table>
            </>
        )
    }
}

export default DailySchedule