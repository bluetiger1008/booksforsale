import React, { Component } from 'react'
import _ from 'lodash'
import { Tabs, Row, Col, Layout, Menu, Dropdown, Button, Icon, message } from 'antd'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import HeaderComponent from '../Header/header'
import BookSalesWrapper from './bookSales.style'

const { Footer, Content } = Layout
const TabPane = Tabs.TabPane
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
}, {
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
	state = {
		showMoreIndex: []
	}

	handleMenuClick = (e) => {
		message.info('Click on menu item.');
		console.log('click', e);
	}
	
	callback = (key) => {
		console.log(key);
	}

	showMore = (idx) => {
		this.setState((prevState) => {
			console.log(idx, _.indexOf(prevState.showMoreIndex, idx))
			if(_.indexOf(prevState.showMoreIndex, idx) === -1) {
				prevState.showMoreIndex.push(idx)
			} else {
				_.remove(prevState.showMoreIndex, function(n) {
					return n == idx
				})
			}
			
			return prevState
		}, () => {
			console.log(this.state)
		})

	}

	render() {
		const { showMoreIndex } = this.state
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
										<Dropdown overlay={menu} trigger={['click']}>
											<Button style={{ marginLeft: 8 }}>
												Button <Icon type="down" />
											</Button>
										</Dropdown>
									</div>
								</Col>
								<Col span={16}>
									{ data.map((item, idx) => {
										return (
											<div className="sale-box" key={idx}>
												<div className="sale-header">
													<p className="miles">{item.miles_from_location} miles from location</p>
													<div className="summaries">
														<div className="summary">
														<FontAwesomeIcon icon="map-marker-alt" className="icon"/>
															<p>{item.organization_name} Library <br/> {item.address} <br/> {item.phone_number}</p>
														</div>
														<div className="summary">
															<FontAwesomeIcon icon="calendar" className="icon"/>
															<p>May 11 - 12 <br/> Oct 12 - 13</p>
														</div>
														<div className="summary">
															<FontAwesomeIcon icon="clock" className="icon"/>
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
													<div className="main-content">
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
														<a className="show-more" onClick={this.showMore.bind(undefined, idx)}>More <Icon type="down" /></a>
													</div>
													{ showMoreIndex[idx] === idx &&
														<div className="additional-content" >
															<Tabs defaultActiveKey="1" onChange={this.callback}>
																<TabPane tab="Additional Info" key="1">
																	<p>Hayner Library, 327 State St <br/> 618-123-4567</p>
																	<p>Info about any special events held at the same as the sale</p>
																	<p>Detailed info about picked over books or other  information submitted from textarea when registering event</p>
																</TabPane>
																<TabPane tab="Special Preview" key="2">Content of Tab Pane 2</TabPane>
																<TabPane tab="Related Events" key="3">Content of Tab Pane 3</TabPane>
																<TabPane tab="Organization Info" key="4">Content of Tab Pane 3</TabPane>
																<TabPane tab="Contact" key="5">Content of Tab Pane 3</TabPane>
															</Tabs>
														</div>
													}
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