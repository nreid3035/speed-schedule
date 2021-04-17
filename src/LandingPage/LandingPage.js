import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="landing-page-container">
                <div>
                    <img src="" alt="hero-banner-img"/>
                </div>
                <p>
                   Place an intro to the app here... explain the purpose and how to use it.
                </p>
                <Link to={'/signup'}>
                  <button>Signup</button>
                </Link>
                <Link to={'/login'}>
                  <button>Login</button>
                </Link>
            </div>
        )
    }
}

export default LandingPage