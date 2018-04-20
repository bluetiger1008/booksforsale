import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import AuthWrapper from './auth.style'
import authAction from '../../redux/auth/actions'

const FormItem = Form.Item
const { login } = authAction

class Login extends Component {
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        let authData = {
        	username: values.userName,
        	password: values.password
        }

        this.props.login(authData)
      }
    });
  }

	render() {
		const { getFieldDecorator } = this.props.form

		return (
			<AuthWrapper>
				<div className="login-modal">
					<Form onSubmit={this.handleSubmit} className="login-form">
		        <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
		          )}
		        </FormItem>
		        <FormItem>
		        	<div className="other-option">
			          {getFieldDecorator('remember', {
			            valuePropName: 'checked',
			            initialValue: true,
			          })(
			            <Checkbox>Remember me</Checkbox>
			          )}
			          <a className="login-form-forgot" href="">Forgot password</a>
			        </div>
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            Log in
		          </Button>
		          Or <a href="">register now!</a>
		        </FormItem>
		      </Form>
				</div>
			</AuthWrapper>
		);
	}
}

const WrappedNormalLoginForm = Form.create()(Login)
export default connect(
  state => ({
    ...state.Auth.toJS()
  }),
  { login }
)(WrappedNormalLoginForm)