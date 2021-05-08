import React from 'react'
import './LandingPage.css'
import heroBanner from '../speed-schedule-resources/hero-banner.jpg'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="hero-container">
                    <img className="hero-banner" src={heroBanner} alt="hero-banner-img"/>
                </div>
                <p className="intro">
                   Speed Schedule is an app meant to bring convienience and regimine to the activities you already do daily.
                   Easily save the things you do most often under the "Add Event" page, then schedule these events
                   to be viewed in our "Daily View" feature. Whether you're trying to add structure and timing to your morning routine, or trying to keep track of your general life
                   Speed Schedule is the tool you need to make your life easier. Signup or Login below!
                </p>
                <Link to={'/signup'} className="landing-link">
                  <button className="landing-button">Signup</button>
                </Link>
                <Link to={'/login'} className="landing-link">
                  <button className="landing-button">Login</button>
                </Link>
            </>
        )
    }
}

export default LandingPage