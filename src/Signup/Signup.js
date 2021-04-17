import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <form>
                <label htmlFor="first-name" className="signup-label">First Name</label>
                <input type="text" name="first-name" id="first-name" className="signup-input" />
                <label htmlFor="last-name" className="signup-label">Last Name</label>
                <input type="text" name="first-name" id="first-name" className="signup-input" />
                <label htmlFor="username" className="signup-label">Username</label>
                <input type="text" name="username" id="username" className="signup-input" />
                <label htmlFor="email" className="signup-label">Email</label>
                <input type="text" name="email" id="email" className="signup-input" />
                <label htmlFor="password" className="signup-label">Password</label>
                <input type="text" name="password" id="password" className="signup-input" />
                <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
                <input type="text" name="confirm-password" id="confirm-password" className="signup-input" />
                <Link to={'/login'}>
                  <button type="submit" className="signup-submit">Submit</button>
                </Link>
            </form>
        )
    }
}

export default Signup