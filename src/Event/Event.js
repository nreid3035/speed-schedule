import React from 'react'
import './Event.css'

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="event-container">
                <h3 className="event-name">{this.props.eventObj.event_name}</h3>
                <p>Duration: {this.props.eventObj.duration}</p>
                <p>Notes: {this.props.eventObj.notes}</p>
            </div>
        )
    }
}

export default Event