import { Component } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    // The object passed to setState is merged with the current state object
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        });
    }

    handleSubmit = async (event) => {
        // Prevent form from being submitted to the server
        event.preventDefault();
        try {
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            // console.log() will have above 'state' info minus error and confirm properties
            // Check step 3 of Mern Infra lesson 4 for more ways to collect 'formData'
            console.log(formData)
            const user = await signUp(formData)
            // in a successful sign-up we will see 'user' data
            this.props.setUser(user)
        } catch {
            // when error occurs:
            this.setState({ error: 'Sign Up Failed - Try Again' })
        }
    }

    render () {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
    }
}
