import React from 'react';
import '../styles/home.scss'
import { Menu, Dropdown, message, Modal } from 'antd';
import {  UserOutlined, LogoutOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Work from './work'
import Life from './life'
import Blog from './blog'


const { confirm } = Modal

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeMenu: 0
        }
        this.element = this.element.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('activeMenu')) {
            console.log(localStorage.getItem('activeMenu'))
            this.setState({activeMenu: Number(localStorage.getItem('activeMenu'))})
        }
    }

    handleMenuClick = ({key}) => {
        const _this = this
        if (key == '2') {
            confirm({
                title: '退出博客',
                icon: <ExclamationCircleOutlined />,
                content: '确认要退出登录吗？',
                onOk() {
                    _this.props.logout()
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        message.info('Click');
    }

    changeActiveMenu (idx) {
        this.setState({activeMenu: idx})
        localStorage.setItem('activeMenu', idx)
    }

    element = () => {
        if (this.state.activeMenu === 0 && (window.location.pathname === '/home' || window.location.pathname === '/')) {
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
            },{
                label: '测试学习',
                key: '4',
                link: '/blog'
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
                        {this.element()}
                        <Route path="/work" component={Work}/>
                        <Route path="/life" component={Life}/>
                        <Route path="/blog" component={Blog}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Home;