import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import AuthWrapper from './auth.style'
import authAction from '../../redux/auth/actions'

const FormItem = Form.Item
const { signup } = authAction

class Signup extends Component {
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let userData = {
        	username: values.userName,
        	email: values.email,
        	password: values.password
        }

        this.props.signup(userData)
      }
    })
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
		          {getFieldDecorator('email', {
		            rules: [{ required: true, message: 'Please input your email!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
		          <Button type="primary" htmlType="submit" className="signup-form-button">
		            Signup
		          </Button>
		        </FormItem>
		      </Form>
				</div>
			</AuthWrapper>
		);
	}
}

const WrappedNormalSignupForm = Form.create()(Signup)

export default connect(
  state => ({
    ...state.Auth.toJS()
  }),
  { signup }
)(WrappedNormalSignupForm)