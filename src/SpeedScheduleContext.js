import React from 'react'

export default React.createContext({
    events: [],
    scheduledEvents: [],
    handleAddEventStateChange: () => {}
})