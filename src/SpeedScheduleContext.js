import moment from 'moment'
import React from 'react'

export default React.createContext({
    date: moment(new Date()).format('MMM Do YYYY'),
    month: new Date().getMonth(),
    day: new Date().getDay(),
    year: new Date().getFullYear(),
    events: [],
    scheduledEvents: [],
    handleAddEventStateChange: () => {},
    handleSchedEventStateChange: () => {},
    setDateState: () => {},
    setFullDateState: () => {},
    setDayState: () => {},
    setMonthState: () => {},
    setYearState: () => {}
})