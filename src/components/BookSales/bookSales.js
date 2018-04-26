import React, { Component } from 'react'
import { Row, Col, Layout, Menu, Dropdown, Button, Icon, message } from 'antd'
import FontAwesome from 'react-fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import HeaderComponent from '../Header/header'
import BookSalesWrapper from './bookSales.style'

const { Footer, Content } = Layout;
const data = [{
	"data_format": "booksforsale_template_v1",
	"miles_from_location": 10,
	"organization_name": "XXXX YYY Library",
	"address": "xxx yyy street, San Francisco, CA 94123", 
	"phone_number": "123-456-7890",
	"dates": [
		{
			"dateStart": "2018-04-25 09:00",
			"dateEnd": "2018-04-25 18:00",
			"hourStart": "08:00",
			"hourEnd": "16:00"
		},
		{
			"dateStart": "2018-04-25 09:00",
			"dateEnd": "2018-04-25 18:00",
			"hourStart": "08:00",
			"hourEnd": "16:00"
		},
		{
			"dateStart": "2018-04-25 09:00",
			"dateEnd": "2018-04-25 18:00",
			"hourStart": "08:00",
			"hourEnd": "16:00"
		},
	],
	"additional_schedule_information": "oashfdaidsfoasd as dfas dfa sdf as fa sdf",
	"books_info": {
		"is_sorted": false,
		"has_been_picked_over": false,
		"phone_scanners_allowed": false,
		"creates_or_boxes_allowed": false,
		"additional_books_information": "asdf sdf as dfas df asd af"
	},
	"size_of_sale": 20000,
	"min_price": 8.00,
	"max_price": 12.43,
	"special_preview_date": "2018-04-27",
	"special_preview_time": "08:00",
	"additional_info": "Info about any special events held bla bla bla",
}]

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
									{ data.map((item, idx) => {
										return (
											<div className="sale-box">
												<div className="sale-header">
													<p className="miles">{item.miles_from_location} miles from location</p>
													<div className="summaries">
														<div className="summary">
															<FontAwesome name="map-marker" />
															<FontAwesomeIcon icon="spinner"/>
															<p>{item.organization_name} Library <br/> {item.address} <br/> {item.phone_number}</p>
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
															<p><FontAwesomeIcon icon="check" className="icon"/> 25,000 books</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> 80% donated</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> 55% hardcover</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> Sorted</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> Paperbacks .25</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> Hardcovers .50</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="check" className="icon" /> Not ‘picked over’</p>
														</li>
														<li>
															<p><FontAwesomeIcon icon="flag" className="icon" /> No buyer restrictions</p>
														</li>
													</ul>
												</div>
											</div>
										)
									})}
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