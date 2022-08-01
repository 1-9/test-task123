import { Link } from "react-router-dom"
import styled from "styled-components"

import { globalComponentStyles } from '../../../../globalComponentStyles'

export const HeaderToplineStyled = styled.div`
	${globalComponentStyles.section}
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 18px 15px;
	position: relative;
	
	@media (max-width: 760px)
	{
		padding-top: 9px;
		padding-bottom: 5px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 5;
		background: #67aefc;
	}
`

export const MobileMenuButtonStyled = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	display: none;
	padding: 10px 0;

	&:active
	{
		opacity: .7;
	}

	& span
	{
		background: #fff;
		border-radius: 50%;
		margin: 0 5px;
		height: 13px;
		width: 13px;
	}
	
	@media (max-width: 760px)
	{
		display: flex;
	}
`

export const LogoWrapStyled = styled(Link)`
	height: 59px;
	margin-right: auto;
	
	img
	{
		max-width: 100%;
	}
	
	@media (max-width: 760px)
	{
		height: auto;
		width: 136px;
	}
`

export const HeaderNavStyled = styled.ul`
	display: flex;
	margin: 0 12px;
	list-style: none;
	padding: 0;

	li
	{
		margin: 0 18px;
	}

	a
	{
		color: #fff;
		font-weight: 600;
	}
	
	@media (max-width: 960px)
	{
		margin: 0;
		
		li
		{
			margin: 0 0 0 36px;
		}
	}
	
	@media (max-width: 760px)
	{
		position: absolute;
		top: 100%;
		z-index: 2;
		background: #67aefc;
		width: 100%;
		left: 0;
		display: none;
		flex-direction: column;
		border-top: 1px solid #fff;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		padding: 42px 20px 49px;
		
		&.active
		{
			display: flex;
		}
		
		li
		{
			margin-bottom: 40px;
			
			&:last-child
			{
				margin-bottom: 0;
			}
		}
		
		a
		{
			font-size: 17px;
			font-weight: 800;
		}
	}
`