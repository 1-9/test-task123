import React from 'react'
import styled from 'styled-components'
import OrderButton from '../buttons/OrderButton'

export const StyledSubmit = styled.input`
	padding: 19px 83px 20px;
	margin-top: 10px;
	
	@media (max-width: 760px)
	{
		margin-top: 5px;
		margin-bottom: 42px;
	}
`

const FormSubmit = (props) => {
  return (
	<OrderButton as={StyledSubmit} {...props} />
  )
}

export default FormSubmit