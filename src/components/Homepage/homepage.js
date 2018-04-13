import React, { Component } from 'react'
import { Row, Col, Layout, Menu, Dropdown, Icon } from 'antd'
import FontAwesome from 'react-fontawesome'
import ReactHighmaps from 'react-highcharts/ReactHighmaps.src'

import maps from '../../assets/mapdata/europe'
import HeaderComponent from '../Header/header'
import HomepageWrapper from './homepage.style'
import avatar from '../../assets/images/avatar.png'

const { Footer, Sider, Content } = Layout;

var data = [
    ['us-ma', 0],
    ['us-wa', 1],
    ['us-ca', 2],
    ['us-or', 3],
    ['us-wi', 4],
    ['us-me', 5],
    ['us-mi', 6],
    ['us-nv', 7],
    ['us-nm', 8],
    ['us-co', 9],
    ['us-wy', 10],
    ['us-ks', 11],
    ['us-ne', 12],
    ['us-ok', 13],
    ['us-mo', 14],
    ['us-il', 15],
    ['us-in', 16],
    ['us-vt', 17],
    ['us-ar', 18],
    ['us-tx', 19],
    ['us-ri', 20],
    ['us-al', 21],
    ['us-ms', 22],
    ['us-nc', 23],
    ['us-va', 24],
    ['us-ia', 25],
    ['us-md', 26],
    ['us-de', 27],
    ['us-pa', 28],
    ['us-nj', 29],
    ['us-ny', 30],
    ['us-id', 31],
    ['us-sd', 32],
    ['us-ct', 33],
    ['us-nh', 34],
    ['us-ky', 35],
    ['us-oh', 36],
    ['us-tn', 37],
    ['us-wv', 38],
    ['us-dc', 39],
    ['us-la', 40],
    ['us-fl', 41],
    ['us-ga', 42],
    ['us-sc', 43],
    ['us-mn', 44],
    ['us-mt', 45],
    ['us-nd', 46],
    ['us-az', 47],
    ['us-ut', 48],
    ['us-hi', 49],
    ['us-ak', 50],
    ['undefined', 51]
];
const config = {
  chart: {
      map: maps,
      backgroundColor: 'transparent'
  },

  title: {
    text: ''
  },

  legend: {
    enabled: false
  },

  colorAxis: {
    min: 0,
    stops: [
      [0, '#004ba8'],
      [1, '#004ba8']
    ]
	},

	credits: {
      enabled: false
  },

  series: [{
      data: data,
      name: 'Random data',
      borderWidth: 2,
      borderColor: '#0269e0',
      states: {
          hover: {
              color: '#36ca38'
          }
      }
  }]
};

class Homepage extends Component {
	render() {
		return (
			<HomepageWrapper>
				<Layout>
		      <HeaderComponent />
		      <Content>
		      	<div className="container">
			      	<Row gutter={32}>
					      <Col span={12}>
					      	<h2>Click to find estate and books sales now</h2>
					      	<ReactHighmaps config={config} ref="chart"></ReactHighmaps>
					      </Col>
					      <Col span={12}>
					      	<h2>Subscribe our newsletter for your benefits</h2>
					      	<p>Rapidiously iterate interoperable “outside the box” thinking and low-risk high-yield potentialities.
					      	Interactively maximize accurate synergy and state of the art potentialities.</p>
					      	<ul>
					      		<li><FontAwesome name="check" /><p>Professionally aggregate economically sound action items</p></li>
					      		<li><FontAwesome name="check" /><p>Conveniently extend revolutionary opportunities before premier materials.</p></li>
					      		<li><FontAwesome name="check" /><p>Globally incentivize installed base benefits whereas quality customer</p></li>
					      	</ul>
					      	<form>
						      	<input type="email" placeholder="Give us your best email here…"/>
						      	<button>HELP ME MAKE MONEY!</button>
						      </form>
					      </Col>
					    </Row>
					  </div>
		      </Content>
		      <Footer>
		      	<p>Copyright BooksForSale 2018. All Rights Reserved.</p>
		      </Footer>
		    </Layout>
			</HomepageWrapper>
		);
	}
}

export default Homepage