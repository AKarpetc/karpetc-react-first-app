import React from "react"
import './Button.css';

export default class LoginField extends React.Component {
    render() {
        return <input onClick={this.props.onClick} className="button" type="button" value={this.props.value}></input>
    }
}