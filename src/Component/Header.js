import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Layout>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
             <Menu.Item key="1"><Link to="/">Home Page</Link></Menu.Item>
           <Menu.Item key="2">  <Link to="/about">  About Page</Link></Menu.Item>
            </Menu>
            </Layout>

        )
    }
}

export default Header;