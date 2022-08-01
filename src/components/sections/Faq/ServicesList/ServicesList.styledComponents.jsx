import styled from "styled-components"

export const Ul = styled.ul`
	list-style: none;
	padding: 0;
`

export const H5 = styled.h5`
	align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    position: relative;
	
	&::before
	{
		background: #75E169;
		border-radius: 50%;
		content: '';
		display: inline-block;
		flex-shrink: 0;
		height: 24px;
		margin-right: 28px;
		width: 24px;
		transition: all .3s;
		
		@media (max-width: 760px)
		{
			height: 15px;
			margin-right: 18px;
			width: 15px;
		}
	}
	
	@media (max-width: 760px)
	{
		font-size: 17px;
	}
`

export const ToggleBtn = styled.button`
	background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAxNCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuMDAwMSAyNUwxLjAwMDA2IDEzTDEzLjAwMDEgMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=) center center no-repeat;
	background-size: contain; 
	border: none;
	cursor: pointer;
	margin-left: auto;
	height: 24px;
	padding: 0;
	width: 24px;
	transform: rotate(-90deg);
	transition: all .3s;

	&:hover
	{
		opacity: .6;
	}
`

export const TextDivWrap = styled.div`
	overflow: hidden;
`

export const TextDiv = styled.div`
	font-size: 18px;
	line-height: 1.7;
	position: relative;
	margin: 29px 0 28px;
	padding: 10px 30px 15px 52px;
	
	@media (max-width: 760px)
	{
		font-size: 17px;
		margin: 15px 0 18px;
		padding: 0px 0px 5px 32px;
	}
`

export const Li = styled.li`
	background: #fff;
	border-radius: 15px;
	margin-bottom: 10px;
	padding: 18px 43px 19px 44px;
	
	&.opened ${H5}
	{
		font-size: 21px;
		font-weight: bold;
		
		&::before
		{
			background: #67AEFC;
		}
		
		@media (max-width: 760px)
		{
			font-size: 17px;
			font-weight: 800;
		}
	}
	
	&.opened ${ToggleBtn}
	{
		transform: rotate(90deg);
	}
	
	&.opened ${TextDiv}::before
	{
		content: '';
		background: #000;
		height: 100%;
		width: 1px;
		position: absolute;
		left: 12px;
		top: 0;
		
		@media (max-width: 760px)
		{
			left: 6px;
		}
	}

	&.opened ${TextDiv} p
	{
		margin: 0 0 1.3em;
		
		&:last-child
		{
			margin: 0;
		}
	}
	
	@media (max-width: 760px)
	{
		padding: 14px 23px 17px 24px;
	}
`