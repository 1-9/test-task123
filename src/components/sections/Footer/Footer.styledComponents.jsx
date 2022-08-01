import styled from "styled-components";

const viberIcon = require('./img/viber-icon.svg').default || '';

export const SiteFooterStyled = styled.footer`
	background: #64ABF9;
	padding: 101px 20px 82px;
	
	@media (max-width: 760px)
	{
		padding: 46px 20px 140px;
	}
`

export const FooterWrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`
export const Topline = styled.div`
	display: flex;
	
	@media (max-width: 920px)
	{
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`

export const LogoWrap = styled.a`
	display: block;
	margin-bottom: 41px;
	width: 280px;
	
	img
	{
		width: 100%;
	}
	
	@media (max-width: 760px)
	{
		display: none;
		
		&.sp-hidden-pc
		{
			background: none;
			display: block;
			margin-bottom: 26px;
			padding: 0;
		}
	}
`

export const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 280px;
	
	a:hover
	{
		opacity: .8;
	}
	
	@media (max-width: 920px)
	{
		display: inline-flex;
	}
`

export const SocialLink = styled.a`
	height: 25px;
	width: 25px;
	transition: all .3s;
	
	&:hover
	{
		opacity: .8;
	}
`

export const FooterCol = styled.div`
	width: 33.333%;
	
	@media (max-width: 1200px)
	{
		width: 40%;
	}
	
	@media (max-width: 920px)
	{
		display: inline-flex;
		width: auto;
		
		&:first-child
		{
			flex-direction: column;
			margin-bottom: 25px;
		}
	}
	
	@media (max-width: 760px)
	{
		order: 2;
		min-width: 280px;
		margin-bottom: 40px;
	}
`

export const PhonesBlock = styled(FooterCol)`
	display: flex;
	flex-direction: column;
	padding-top: 24px;
	
	a
	{
		background: url(${viberIcon}) 0 0 no-repeat;
		color: #fff;
		font-size: 20px;
		margin-bottom: 7px;
		min-height: 30px;
		padding-left: 33px;
	}
	
	@media (max-width: 760px)
	{
		order: 1;
		padding-top: 0;
		margin-bottom: 57px;
	}
`

export const EmailsBlock = styled(FooterCol)`
	padding-top: 24px;
	
	a
	{
		color: #fff;
		font-size: 20px;
		min-height: 30px;
	}
	
	@media (max-width: 1200px)
	{
		width: 20%;
	}
	
	@media (max-width: 760px)
	{
		order: 3;
		padding-top: 0;
		justify-content: center;
	}
`

export const Copyright = styled.div`
	color: #fff;
	font-size: 18px;
	padding-top: 122px;
	text-align: center;
	
	@media (max-width: 920px)
	{
		padding-top: 60px;
	}
	
	@media (max-width: 760px)
	{
		padding-top: 23px;
	}
`
