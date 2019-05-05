import React, { Component } from 'react'
import { Row, Col,Button } from 'antd';

class Task extends Component {

    constructor(props) {
        super(props);

        console.log('constructer|' + props)

    }



    render() {
        const { Id, Detail } = this.props.todo;

        return (
            <div>


                <Row type="flex" justify="space-around" align="middle">
                    <Col span={12} justify="space-around" align="middle">      <p>{Id}</p></Col>
                    <Col span={12} justify="space-around" align="middle">  <p>{Detail}</p></Col>
                </Row>

            </div>
        )

    }
}

export default Task;