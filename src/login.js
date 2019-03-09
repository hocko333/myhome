import React from 'react'
import './login.css'
import { Button, Icon, Form, Divider } from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      password: ''
    }
  }
  handleUname = e => {
    this.setState({
      uname: e.target.value
    })
  }
  handlePwd = e => {
    this.setState({
      password: e.target.value
    })
  }
  submit = () => {
    
  }
  
  render() {
    return (
      <div className="login-container">
        <div className="log_box">
          <Icon name="home" size="huge"></Icon>
        </div>
        <div className="login_form">
          <Form>
            <Form.Input
              required
              icon='user'
              iconPosition='left'
              size="big"
              placeholder="请输入用户名..."
              value={this.state.uname}
              onChange={this.handleUname}
            />
            <Form.Input
              required
              icon='lock'
              iconPosition='left'
              size="big"
              placeholder="请输入密码..."
              type="password"
              value={this.state.password}
              onChange={this.handlePwd}
            />
            <Button fluid color="green" onClick={this.submit}>登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
          </Form>
          <Divider horizontal>&nbsp;&nbsp;&nbsp;&nbsp;</Divider>
          <div className="login_thrid">
            <Icon size="big" name="wechat"/>
            <Icon size="big" name="qq"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
