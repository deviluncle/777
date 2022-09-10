import React from 'react';
import { Input, Space, Button, message  } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import '../styles/login.css'
import api from '../utils/api'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onUserNameChange(e) {
        this.setState({userName: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }


    submit = () => {
        if (this.state.userName === '' || this.state.password === '') {
            message.error('用户名或密码不能为空!');
        } else {
            api.post('/say', { userName: this.state.userName, password: this.state.password }).then(res => {
                message.success('登录成功');
                this.props.loginSuccessed();
            }).catch(err => {
                message.error(err.response.data.message);
            })
        }
    }

    render() {
        return(
            <div className="loginBox">
                <p className="loginText">请先登录</p>
                <Input 
                    className="loginInput" 
                    value={this.state.userName}
                    placeholder="请输入用户名" 
                    prefix={<UserOutlined />}
                    onChange={this.onUserNameChange} 
                />

                <Input.Password 
                    className="loginInput"
                    value={this.state.password}
                    placeholder="请输入密码"
                    prefix={<LockOutlined />}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={this.onPasswordChange}
                />

                <Button onClick={this.submit} className="loginButton" type="primary">登 录</Button>
            </div>
        )
    }
}

export default Login;
