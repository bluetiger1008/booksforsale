import React, { Component } from 'react'
import { Row, Col, Layout, Menu, Dropdown, Button, Icon, message } from 'antd'
import FontAwesome from 'react-fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import HeaderComponent from '../Header/header'
import BookSalesWrapper from './bookSales.style'

const { Footer, Content } = Layout;

class BookSales extends Component {
	handleMenuClick = (e) => {
		message.info('Click on menu item.');
		console.log('click', e);
	}

	render() {
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1">Distance</Menu.Item>
				<Menu.Item key="2">Number of books</Menu.Item>
				<Menu.Item key="3">Scanner Friendly</Menu.Item>
			</Menu>
		);

		return (
			<BookSalesWrapper>
				<Layout>
					<HeaderComponent />
					<Content>
						<div className="container">
							<Row gutter={50}>
								<Col span={24}>
									<div className="booksales-header">
										<h3>Book sales in Illinois</h3>
										<Dropdown overlay={menu}>
											<Button style={{ marginLeft: 8 }}>
												Button <Icon type="down" />
											</Button>
										</Dropdown>
									</div>
								</Col>
								<Col span={16}>
									<div className="sale-box">
										<div className="sale-header">
											<p className="miles">10 miles from location</p>
											<div className="summaries">
												<div className="summary">
													<FontAwesome name="map-marker" />
													<FontAwesomeIcon icon="spinner"/>
													<p>Hayner Library <br/> 327 State St <br/> 618-123-4567</p>
												</div>
												<div className="summary">
													<FontAwesome name="calendar-o" />
													<p>May 11 - 12 <br/> Oct 12 - 13</p>
												</div>
												<div className="summary">
												<FontAwesome name="clock-o" />
													<p>Mon: 10-8</p>
												</div>
											</div>
											<div className="actions">
												<a><FontAwesomeIcon icon={['far', 'heart']} /></a>
												<a><FontAwesomeIcon icon={['far', 'envelope']} /></a>
												<a><FontAwesomeIcon icon={['far', 'edit']} /></a>
											</div>
										</div>
										<div className="sale-content">
											<ul>
												<li>
													<p><FontAwesomeIcon icon="check" /> 25,000 books</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> 80% donated</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> 55% hardcover</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> Sorted</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> Paperbacks .25</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> Hardcovers .50</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="check" /> Not ‘picked over’</p>
												</li>
												<li>
													<p><FontAwesomeIcon icon="flag" /> No buyer restrictions</p>
												</li>
											</ul>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</BookSalesWrapper>
		)
	}
}

export default BookSales