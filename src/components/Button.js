import React from "react"
import './Button.css';

export default class LoginField extends React.Component {
    render() {
        return <input onClick={this.authorize} className="button" type="button" value={this.props.value}></input>
    }
    authorize() {

        alert();

        fetch('http://localhost:5001/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username:"bob",
                password:"bob"
            })
        });
    }
}