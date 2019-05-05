import React, { Component } from 'react';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import 'antd/dist/antd.css';



class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div align="middle"> 
                <Header />

                <h1 align="middle">About Page     </h1>     
                  <Footer company="ABC Company " email='ABC@co.th' />
            </div>
    );

    }

}
export default About;
