import React, { Children } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components';


const OrderButtonStyled = styled(Link)`
	background: #75E169;
	border: 2px solid #75E169;
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
	padding: 8px 40px;
	text-transform: uppercase;
	transition: all .3s;
	
	&:hover
	{
		border-color: #67AEFC;
		text-decoration: none;
	}

	&:active
	{
		background: #67AEFC;
		border-color: #67AEFC;
	}
	
	@media (max-width: 500px)
	{
		padding: 17px 60px;
		width: 100%;
		text-align: center;
	}
`


const OrderButton = ({linkTo, children, ...props}) => {
	
	return (
		<OrderButtonStyled to={linkTo} {...props}>{children}</OrderButtonStyled>
	)
}

export default OrderButton