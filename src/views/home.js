import React from 'react';
import '../styles/home.scss'
import { Menu, Dropdown, message } from 'antd';
import {  UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Work from './work'
import Life from './life'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeMenu: 0
        }
        this.element = this.element.bind(this);
    }

    handleMenuClick = ({key}) => {
        if (key == '2') {
            this.props.logout()
        }
        message.info('Click');
    }

    changeActiveMenu (idx) {
        this.setState({activeMenu: idx})
    }

    element() {
        if (this.state.activeMenu === 0) {
            return <div className="home">
                        <p>再见少年拉满弓，</p>
                        <p>不惧岁月不惧风。</p>
                    </div>
        }
    }

    render() {
        const menus = [
            {
                label: '首页',
                key: '1',
                link: '/home'
            },
            {
                label: '工作笔记',
                key: '2',
                link: '/work'
            },
            {
                label: '生活记录',
                key: '3',
                link: '/life'
            },
        ]
        const userSettungMenu = (
            <Menu
                onClick={this.handleMenuClick}
                items={
                    [
                        {
                            label: '用户资料',
                            key: '1',
                            icon: <UserOutlined />,
                        },
                        {
                            label: '退出登录',
                            key: '2',
                            icon: <LogoutOutlined />,
                        },
                    ]
                }
            />
        );
        const MenuItems = menus.map((val, index) => 
            <Link 
                key={val.key}
                to={val.link}
                onClick={() => this.changeActiveMenu(index)}
                className={'menuItem ' + ( this.state.activeMenu === index ? 'active': '') }>
                {val.label}
            </Link>
        )
        
        let homeELement = this.element();

        return(
            <Router>
                <div>
                    <div className="menuTop">
                        <div className="menuItems">
                            {MenuItems}
                        </div>
                        <div className="userSetting">
                            <Dropdown.Button overlay={userSettungMenu} placement="bottom" icon={<UserOutlined />}>
                                用户设置
                            </Dropdown.Button>
                        </div>
                    </div>
                    <div className="bodyBox">
                        <Route path="/work" component={Work}/>
                        <Route path="/life" component={Life}/>

                        {homeELement}
                    </div>
                </div>
            </Router>
        )
    }
}

export default Home;