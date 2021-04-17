import React from 'react'

class AddEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <label htmlFor="event-title" className="add-event-label">Event Title</label>
                <input type="text" name="event-title" id="event-title" className="add-event-input" />
                <label htmlFor="duration" className="add-event-label">Duration (minutes)</label>
                <input type="text" name="duration" id="duration" className="add-event-input" />
                <label htmlFor="notes" className="add-event-label">Notes</label>
                <textarea name="notes" id="notes" placeholder="Type notes here..."/>
            </form>
        )
    }
}