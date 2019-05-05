import React, { Component } from "react";
import Task from "./Task";

class List extends Component {
    show() {
        return (
            this.props.todo &&
            this.props.todo.map(res => (
                <Task key={res.id} todo={res} />
            ))
        );
    }

    render() {
        return <div >{this.show()}</div>;
    }
}

export default List