import React from "react"
import './Field.css';

export default class LoginField extends React.Component {
    render() {
        return <input type={this.props.type} className="user-name" placeholder={this.props.placeholder} />
    }
}