import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Dropdown, Icon } from 'antd'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import { HeaderWrapper, MenuWrapper } from './header.style'
import avatar from '../../assets/images/avatar.png'
import authAction from '../../redux/auth/actions'

const { Header } = Layout
const { logout } = authAction

class HeaderComponent extends Component {
	logout = () => {
		this.props.logout()
	}

	render() {
		const { isLoggedIn } = this.props;

		const menu = (
			<MenuWrapper>
			  <Menu>
			    <Menu.Item key="0">
			      <a><FontAwesome name="book" />My Books</a>
			    </Menu.Item>
			    <Menu.Item key="1">
			      <a><FontAwesome name="user" />My Account</a>
			    </Menu.Item>
			    <Menu.Item key="2">
			      <a><FontAwesome name="cog" />Settings</a>
			    </Menu.Item>
			    <Menu.Divider />
			    <Menu.Item key="3" onClick={this.logout}>
			    	<a><FontAwesome name="power-off" />Logout</a>
			    </Menu.Item>
			  </Menu>
			</MenuWrapper>
		);

		return (
			<HeaderWrapper>
				<Header>
					<div className="container">
		      	<div className="header-top">
		      		<div className="logo">
		      			<p><FontAwesome name="book" />BookforSale.io</p>
		      		</div>
		      		<div className="user">
		      			{ isLoggedIn ? (
		      				<div>
		      					<img src={avatar} alt="avatar" />
				      			<Dropdown overlay={menu} trigger={['click']}>
									    <a className="ant-dropdown-link">
									      Tedi Kurniadi <Icon type="down" />
									    </a>
									  </Dropdown>
		      				</div>
		      			) : (
		      				<div className="auth-buttons">
			      				<Link to="/login">
				      				Login
				      			</Link>
				      			<Link to="/signup">
				      				Signup
				      			</Link>
				      		</div>
		      			)}
		      		</div>
		      	</div>
		      	<div className="nav">
		      		<Link to="/">
		      			<FontAwesome name="home" />Home
		      		</Link>
		      		<a><FontAwesome name="home" />Classified ads</a>
		      		<a><FontAwesome name="bullhorn" />Advertise with us</a>
		      		<Link to="/registerAccount">
		            <FontAwesome name="calendar" />Register your event
		          </Link>
		      	</div>
		      </div>
		    </Header>
	    </HeaderWrapper>
		)
	}
}

export default connect(state => ({
  isLoggedIn: state.Auth.get('idToken') !== null
	}),
	{ logout }
)(HeaderComponent)