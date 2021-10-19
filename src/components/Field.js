import React from "react"
import './Field.css';

export default class LoginField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }
    render() {
        const value = this.props.value;
        return (<input
            type={this.props.type}
            className="user-name"
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            value={value} />)
    }
}