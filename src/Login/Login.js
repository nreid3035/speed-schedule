import React from 'react-dom'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <label htmlFor="username" className="login-label">Username</label>
                <input type="text" name="username" id="username" className="login-input" />
                <label htmlFor="password" className="login-label">Password</label>
                <input type="text" name="password" id="password" className="login-input" />
                <Link to={'/home'}>
                  <button type="submit" className="login-submit">Submit</button>
                </Link>
            </form>
        )
    }
}

export default Login