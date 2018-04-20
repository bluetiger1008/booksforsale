import styled from 'styled-components'

const AuthWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: grey;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(90deg, #0384C0 0%, #1FB4B7 100%);
  background-size: cover;
	.login-modal {
		width: 400px;
		height: auto;
		background: white;
		border-radius: 10px;
		padding: 20px;
		.other-option {
			display: flex;
			justify-content: space-between;
		}
		.login-form-button {
		  width: 100%;
		}
	}
`

export default AuthWrapper