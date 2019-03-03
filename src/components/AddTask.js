import React, { Component } from 'react';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    handleSubmit = (e) => {
        const { content } = this.state;
        e.preventDefault();
        if(!content) {
            this.props.addTask(`Task number `);
        } else {
            this.props.addTask(this.state.content);
            this.setState({
                content: ''
            })
        }
    }


    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }


    render() {
        return (
            <form
                id="todo__form"
                className="add-task__form"
                onSubmit={this.handleSubmit}>
                <input
                    className="add-task__input"
                    type="text"
                    name="task"
                    placeholder="whats your next task?"
                    onChange={this.handleChange}
                    value={this.state.content}
                    aria-label="Input for adding task"
                    minLength={3} />
            </form>
        );
    }
}