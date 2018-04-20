import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, Radio, Row, Col, Layout, Select, message, Checkbox  } from 'antd'
import { DatePicker, TimePicker } from 'antd';

import RegisterAccountWrapper from './registerAccount.style'
import HeaderComponent from '../Header/header'

const { Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const InputGroup = Input.Group;

class RegisterAccount extends Component {
	state = {
    confirmDirty: false,
    autoCompleteResult: [],
    radioValue: 1
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

	validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleButtonClick = (e) => {
	  message.info('Click on left button.');
	  console.log('click left button', e);
	}

	handleMenuClick = (e) => {
	  message.info('Click on menu item.');
	  console.log('click', e);
	}

	onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  handleChange = (value) => {
	  console.log(`selected ${value}`);
	}

	handleBlur = () => {
	  console.log('blur');
	}

	handleFocus = () => {
	  console.log('focus');
	}

	onDateChange = (date, dateString) => {
	  console.log(date, dateString);
	}

	onTimeChange(time, timeString) {
	  console.log(time, timeString);
	}

	render() {
    const { getFieldDecorator } = this.props.form;

		return (
			<RegisterAccountWrapper>
				<Layout>
		      <HeaderComponent />
		      <Content>
		      	<div className="container">
		      		<h2>Don’t miss out. Register your event now!</h2>
		      		<p>Rapidiously iterate interoperable “outside the box” thinking and low-risk high-yield potentialities. Interactively maximize accurate synergy and state of the art potentialities. Enthusiastically deploy global information vis-a-vis cross-unit infrastructures. Uniquely recaptiualize global experiences.</p>
		      		<Form onSubmit={this.handleSubmit}>
		      			<div className="form-section">
		      				<h2>Your Organization</h2>
			      			<Row gutter={32}>
			      				<Col span={12}>
			      					<FormItem
							        >
							          {getFieldDecorator('organizationName', {
							            rules: [{
							              required: true, message: 'Please input organization name!',
							            }],
							          })(
							            <Input placeholder="Organization Name*"/>
							          )}
							        </FormItem>
			      				</Col>
			      			</Row>
			      			<Row gutter={32}>
			      				<Col span={12}>
			      					<FormItem
							        >
							          {getFieldDecorator('address', {
							            rules: [{
							              required: true, message: 'Please input address!',
							            }],
							          })(
							            <Input placeholder="Address*"/>
							          )}
							        </FormItem>
							        <FormItem
							        >
							          {getFieldDecorator('address1', {
							            rules: [{
							              required: true, message: 'Please input address!',
							            }],
							          })(
							            <Input placeholder="Address*"/>
							          )}
							        </FormItem>
							        <FormItem
							        >
							          {getFieldDecorator('fullname', {
							            rules: [{
							              required: true, message: 'Please input fullname!',
							            }],
							          })(
							            <Input placeholder="Full Name*"/>
							          )}
							        </FormItem>
			      				</Col>
			      				<Col span={12}>
			      					<Row gutter={32}>
			      						<Col span={12}>
			      							<FormItem
									        >
									          {getFieldDecorator('city', {
									            rules: [{
									              required: true, message: 'Please input city!',
									            }],
									          })(
									            <Input placeholder="City*"/>
									          )}
									        </FormItem>
									        <FormItem
									        >
									          {getFieldDecorator('zipcode', {
									            rules: [{
									              required: true, message: 'Please input zipcode!',
									            }],
									          })(
									            <Input placeholder="Zip Code*"/>
									          )}
									        </FormItem>
			      						</Col>
			      						<Col span={12}>
			      							<FormItem
										        >
								            <Select
													    showSearch
													    style={{ width: '100%' }}
													    placeholder="Select a person"
													    optionFilterProp="children"
													    onChange={this.handleChange}
													    onFocus={this.handleFocus}
													    onBlur={this.handleBlur}
													    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
													  >
													    <Option value="jack">Jack</Option>
													    <Option value="lucy">Lucy</Option>
													    <Option value="tom">Tom</Option>
													  </Select>
									        </FormItem>
			      						</Col>
			      					</Row>
			      					
							        <FormItem
							        >
							          {getFieldDecorator('email', {
							            rules: [{
							              required: true, message: 'Please input email!',
							            }],
							          })(
							            <Input placeholder="Email*"/>
							          )}
							        </FormItem>
			      				</Col>
			      			</Row>
		      			</div>
		      			<div className="form-section">
		      				<h2>Your Sale</h2>
		      				<div className="sub-section">
		      					<h3>Sale Location</h3>
			      				<Row gutter={32}>
			      					<Col span={12}>
			      						<FormItem
								        >
								          {getFieldDecorator('saleAddress', {
								            rules: [{
								              required: true, message: 'Please input saleAddress!',
								            }],
								          })(
								            <Input placeholder="Address*"/>
								          )}
								        </FormItem>
								        <FormItem
								        >
							            <Input placeholder="Address Line 2"/>
								        </FormItem>
								        <FormItem
								        >
							            <Input placeholder="Phone Number (published)"/>
								        </FormItem>
								        <FormItem
								        >
							            <Input placeholder="URL about the sale or bookstore"/>
								        </FormItem>
			      					</Col>
			      					<Col span={12}>
			      						<Row gutter={32}>
			      							<Col span={12}>
			      								<FormItem
										        >
										          {getFieldDecorator('saleCity', {
										            rules: [{
										              required: true, message: 'Please input City!',
										            }],
										          })(
										            <Input placeholder="City*"/>
										          )}
										        </FormItem>
										        <FormItem
										        >
										          {getFieldDecorator('saleZipcode', {
										            rules: [{
										              required: true, message: 'Please input Zipcode!',
										            }],
										          })(
										            <Input placeholder="Zipcode*"/>
										          )}
										        </FormItem>
			      							</Col>
			      							<Col span={12}>
			      								<FormItem
										        >
										          <Select
														    showSearch
														    style={{ width: '100%' }}
														    placeholder="Select a person"
														    optionFilterProp="children"
														    onChange={this.handleChange}
														    onFocus={this.handleFocus}
														    onBlur={this.handleBlur}
														    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
														  >
														    <Option value="jack">Jack</Option>
														    <Option value="lucy">Lucy</Option>
														    <Option value="tom">Tom</Option>
														  </Select>
										        </FormItem>
			      							</Col>
			      						</Row>
			      						<Row gutter={32}>
			      							<Col span={24}>
					      						<FormItem
										        >
										          {getFieldDecorator('saleEmail', {
										            rules: [{
										              required: true, message: 'Please input Email!',
										            }],
										          })(
										            <Input placeholder="Email*"/>
										          )}
										        </FormItem>
										      </Col>
									      </Row>
								        <Row gutter={32}>
								        	<RadioGroup onChange={this.onRadioChange} value={this.state.radioValue}>
										        <Radio value={1}>We are a library</Radio>
										        <Radio value={2}>We are an estate sale</Radio>
										        <Radio value={3}>We are a auction/liquidator</Radio>
										      </RadioGroup>
								        </Row>
			      					</Col>
			      				</Row>
			      			</div>
			      			<div className="sub-section">
			      				<h3>Date & Time</h3>
			      				<Row gutter={32}>
			      					<Col span={12}>
			      						<Row gutter={32}>
			      							<Col span={12}>
			      								<FormItem
										        >
				      								<DatePicker onChange={this.onDateChange} style={{ width: '100%' }} />
				      							</FormItem>
				      							<FormItem
										        >
				      								<TimePicker use12Hours format="h:mm a" onChange={this.onTimeChange} style={{ width: '100%' }} />
				      							</FormItem>
			      							</Col>
			      							<Col span={12}>
			      								<FormItem
										        >
				      								<DatePicker onChange={this.onDateChange} style={{ width: '100%' }} />
				      							</FormItem>
			      							</Col>
			      							<Col span={24}>
				      							<FormItem
										        >
				      								<TextArea rows={4} placeholder={'Describe any regular schdule, e.g. Saturday after Mother’s Day'} />
				      							</FormItem>
			      							</Col>
			      						</Row>
			      					</Col>
			      				</Row>
			      			</div>
			      			<div className="sub-section">
			      				<h3>Books Info</h3>
			      				<Row gutter={32}>
			      					<Col span={12}>
			      						<Row gutter={32}>
			      							<Col span={12}>
			      								<div className="check-group">
				      								<Checkbox>The books are sorted</Checkbox>		      							
				      								<Checkbox>The books have been picked over</Checkbox>
				      							</div>
			      							</Col>
			      							<Col span={12}>
			      								<div className="check-group">
				      								<Checkbox>Phone scanners allowed</Checkbox>
				      								<Checkbox>Crates/boxes allowed</Checkbox>
				      							</div>
			      							</Col>
			      							<Col span={24}>
				      							<FormItem
										        >
				      								<TextArea rows={4} placeholder={'Please describe about your picked over books'} />
				      							</FormItem>
			      							</Col>
			      							<Col span={12}>
			      								<FormItem
										        >
				      								<InputNumber min={1} max={10} placeholder={'Size of sale'} style={{ width: '100%' }}/>
				      							</FormItem>
			      							</Col>
			      							<Col span={16}>
			      								<FormItem
										        >
				      								<InputGroup compact>
											          <Input style={{ width: '45%', textAlign: 'center' }} placeholder="Price from" />
											          <Input style={{ width: '10%', textAlign: 'center', borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} placeholder="~" disabled />
											          <Input style={{ width: '45%', textAlign: 'center', borderLeft: 0 }} placeholder="Price to" />
											        </InputGroup>
											      </FormItem>
			      							</Col>
			      							<Col span={12}>
			      								<FormItem
										        >
										        	<Input placeholder="Donation"/>
										        </FormItem>
			      							</Col>
			      							<Col span={12}>
			      								<FormItem
										        >
										        	<Input placeholder="Hardcover"/>
										        </FormItem>
			      							</Col>
			      						</Row>
			      					</Col>
			      				</Row>
			      			</div>
			      			<div className="sub-section">
			      				<h3>Special Preview</h3>
			      				<Row gutter={32}>
			      					<Col span={12}>
			      						<Row gutter={32}>
			      							<Col span={12}>
			      								<FormItem
										        >
				      								<DatePicker onChange={this.onDateChange} style={{ width: '100%' }} />
				      							</FormItem>
				      						</Col>
				      						<Col span={12}>
				      							<FormItem
										        >
										        	<Input placeholder="Preview fee"/>
										        </FormItem>
				      						</Col>
				      						<Col span={12}>
				      							<FormItem
										        >
				      								<TimePicker use12Hours format="h:mm a" onChange={this.onTimeChange} style={{ width: '100%' }} />
				      							</FormItem>
				      						</Col>
				      						<Col span={12}>
				      							<Checkbox>Friends only</Checkbox>	
				      						</Col>
			      						</Row>
	      							</Col>
			      				</Row>
			      			</div>
		      			</div>
		      			<div className="form-section">
		      				<h2>Additional Info</h2>
		      				<Row gutter={32}>
		      					<Col span={12}>
		      						<FormItem
							        >
	      								<TextArea rows={4} placeholder={'Tell us any special events held at the same time as the sale'} />
	      							</FormItem>
		      					</Col>
		      				</Row>
		      			</div>
				        <FormItem>
				          <Button type="primary" htmlType="submit">Register</Button>
				        </FormItem>
				      </Form>
		      	</div>
		      </Content>
		    </Layout>
			</RegisterAccountWrapper>
		);
	}
}

const WrappedRegisterForm = Form.create()(RegisterAccount);
export default WrappedRegisterForm;