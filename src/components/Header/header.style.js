import styled from 'styled-components';

const HeaderWrapper = styled.div`
	.ant-layout-header {
		background-color: #FFFFFF;
		height: auto;
		padding: 0;
		.header-top {
			display: flex;
			justify-content: space-between;
			color: #075CCA;
			.logo {
				p {
					margin-bottom: 0;
					font-size: 20px;
					span {
						margin-right: 10px;
					}
				}	
			}
			.user {
				img {
					width: 30px;
					height: 30px;
					border-radius: 50%;
					margin-right: 10px;
				}
				.ant-dropdown-link {
					color: #79879A;
					font-size: 16px;
				}
			}
		}
		.nav {
			display: flex;
			a {
				margin-right: 45px;
				font-size: 18px;
				color: #79879B;
				span {
					margin-right: 10px;
				}
			}
		}
	}
`;

const MenuWrapper = styled.div`
	a {
		color: #79879A;
		font-size: 15px;
		span {
			width: 25px;
		}
	}
`;

export { HeaderWrapper, MenuWrapper };