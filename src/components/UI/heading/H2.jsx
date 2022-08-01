import React from 'react'
import styled from 'styled-components'

const H2Styled = styled.h2`
	color: #111;
	font-size: 32px;
	font-weight: 800;
	margin: 0 0 20px;
	text-align: center;
	
	@media (max-width: 760px)
	{
		font-size: 23px;
		font-weight: 800;
	}
`

const H2 = ({children, ...props}) => {
  return (
	<H2Styled {...props}>{children}</H2Styled>
  )
}

export default H2