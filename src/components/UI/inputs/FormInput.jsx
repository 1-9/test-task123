import React from 'react'
import styled from 'styled-components'


export const StyledInput = styled.input`
	border: 1px solid #6EB1FB;
	border-radius: 10px;
	height: 58px;
	margin-bottom: 20px;
	padding: 0 14px;
	width: 100%;
	outline: none;
	
	&::placeholder
	{
		color: #939393;
	}
	
	&:focus::placeholder
	{
		color: #292929;
	}
	
	&:focus
	{
		border: 2px solid #67AEFC;
	}
	
	@media (max-width: 760px)
	{
		margin-bottom: 10px;
	}
`

const FormInput = (props) => {
	return (
		<StyledInput {...props} />
	)
}

export default FormInput