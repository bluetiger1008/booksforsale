import React, { Component } from 'react'
import { Form, Input, Button, Radio, Row, Col, Layout, Menu, Dropdown, Icon, Select, message, AutoComplete } from 'antd'

import RegisterAccountWrapper from './registerAccount.style'
import HeaderComponent from '../Header/header'

const { Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

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

	render() {
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
    const { getFieldDecorator } = this.props.form;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const menu = (
		  <Menu onClick={this.handleMenuClick}>
		    <Menu.Item key="1">1st menu item</Menu.Item>
		    <Menu.Item key="2">2nd menu item</Menu.Item>
		    <Menu.Item key="3">3rd item</Menu.Item>
		  </Menu>
		);

    const props = {
		  name: 'file',
		  action: '//jsonplaceholder.typicode.com/posts/',
		  headers: {
		    authorization: 'authorization-text',
		  },
		  onChange(info) {
		    if (info.file.status !== 'uploading') {
		      console.log(info.file, info.fileList);
		    }
		    if (info.file.status === 'done') {
		      message.success(`${info.file.name} file uploaded successfully`);
		    } else if (info.file.status === 'error') {
		      message.error(`${info.file.name} file upload failed.`);
		    }
		  },
		};

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
		      			</div>
				        <FormItem>
				          <Button type="primary" htmlType="submit">Submit</Button>
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