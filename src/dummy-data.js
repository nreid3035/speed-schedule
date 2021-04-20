const dummyDataObj = {
    events: [
        {
            event_id: 1,
            event_name: "Gym",
            duration: 45,
            notes: "Remember your gym bag"
        },
        {
            event_id: 2,
            event_name: "Work",
            duration: 120,
            notes: "Lunch break is at 12pm"
        },
        {
            event_id: 3,
            event_name: "Pick up the kids",
            duration: 60,
            notes: "Leave by 3, get there by 3:30, get home by 4"
        },
        {
            event_id: 4,
            event_name: "Grocery Shopping",
            duration: 35,
            notes: "Grocery list is on the fridge"
        },
        {
            event_id: 5,
            event_name: "Dinner",
            duration: 25,
            notes: ""
        }
    ],
    scheduledEvents: [
        {
            sched_event_id: 1,
            event_id: 2,
            date: "April 24th 2020",
            start_time: "1100",
            end_time: "1300"
        },
        {
            sched_event_id: 2,
            event_id: 1,
            date: "April 24th 2020",
            start_time: "1330",
            end_time: "1415"
        },
        {
            sched_event_id: 3,
            event_id: 3,
            date: "April 24th 2020",
            start_time: "1500",
            end_time: "1600"
        },
        {
            sched_event_id: 4,
            event_id: 4,
            date: "April 24th 2020",
            start_time: "1800",
            end_time: "1835"
        },
        {
            sched_event_id: 5,
            event_id: 5,
            date: "April 24th 2020",
            start_time: "1900",
            end_time: "1925"
        },
        {
            sched_event_id: 6,
            event_id: 2,
            date: "May 2nd 2021",
            start_time: "1100",
            end_time: "1300"
        }
    ]

}

export default dummyDataObj