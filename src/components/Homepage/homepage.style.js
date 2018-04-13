import styled from 'styled-components';

const HomepageWrapper = styled.div`
	p {
		margin-bottom: 0;
	}
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
	.ant-layout-content {
		background: linear-gradient(180deg, #2B82F4 0%, #075CCA 100%);
		padding: 70px 0;
		text-align: left;
		h2 {
			color: #fff;
			font-weight: normal;
			font-size: 30px;
			margin-bottom: 30px;
		}
		p {
			color: #FFFFFF;
			font-size: 16px;
			line-height: 22px;
			margin-bottom: 30px;
		}
		ul {
			padding: 0;
			margin-bottom: 50px;
			list-style: none;
			li {
				display: flex;
				margin-bottom: 15px;
				span {
					margin-right: 10px;
					line-height: 22px;
					color: #00fd00;
				}
				p {
					margin-bottom: 0;
				}
			}
		}
		form {
			input {
				width: 570px;
				height: 65px;
				border-radius: 30px;
				border: none;
				outline: none;
				padding-left: 30px;
				font-size: 22px;
				line-height: 25px;
				&::placeholder {
					color: #B2BFD0;
				}
			}
			button {
				width: 570px;
				height: 65px;
				border-radius: 30px;
				border: none;
				outline: none;
				background: #064CA7;
				color: #fff;
				font-size: 22px;
				margin-top: 17px;
				cursor: pointer;
			}
		}
	}
	.ant-layout-footer {
		background: #fff;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		p {
			color: #555555;
			font-size: 14px;
			line-height: 16px;
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

export { HomepageWrapper, MenuWrapper };