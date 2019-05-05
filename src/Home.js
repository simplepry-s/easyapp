import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import List from './Component/List'
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import { todoFetch } from "./actions/"



class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.todoFetch();
    }


    render() {

        return (
            <div align="middle">
                <Header />
                <List todo={this.props.todo} />
                <Footer company="ABC Company " email='ABC@co.th' />
            </div>
        );

    }

}
function mapStateToProps(state) {
    return { todo: state.todo };
}


export default connect(mapStateToProps, { todoFetch })(Home);
