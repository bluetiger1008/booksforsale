import styled from 'styled-components'

const RegisterAccountWrapper = styled.div`
	.ant-layout-content {
		padding: 40px 0;
		background: #fff;
		text-align: left;
		
		p {
			font-size: 16px;
			color: #344050;
			line-height: 22px;
		}
		
		h2 {
			color: #344050;
			font-weight: 300;
			font-size: 28px;
			line-height: 33px;
		}

		form {
			margin-top: 30px;
			.form-section {
				margin-bottom: 50px;
				h2 {
					font-size: 24px;
					line-height: 28px;
					&:after {
						content: '';
						position: relative;
						width: 60px;
						height: 2px;
						background: #075CCA;
						display: block;
						margin-top: 12px;
					}
				}
				.sub-section {
					.check-group {
						.ant-checkbox-wrapper {
							margin-left: 0;
							margin-bottom: 10px;
						}
					}
				}
			}
		}
	}
`

export default RegisterAccountWrapper