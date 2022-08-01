import styled from "styled-components"
import { globalComponentStyles } from '../../../../globalComponentStyles'

export const HeaderBannerStyled = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 420px;
	
	@media (max-width: 1200px)
	{
		min-height: auto;
	}
	
	@media (max-width: 760px)
	{
		padding-top: 50px;
	}
`

export const HeaderBannerWrap = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	
	@media (max-width: 960px)
	{
		background: #fff;
		position: relative;
	}
`

export const HeaderBannerWrap2 = styled.div`
	${globalComponentStyles.section}
	align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
	
	@media (max-width: 960px)
	{
		align-items: center;
	}
`

export const H1 = styled.h1`
	color: #484848;
	font-size: 50px;
	font-weight: 900;
	max-width: 580px;
	margin: 0 0 20px;
	line-height: 1.3;
	
	@media (max-width: 1200px)
	{
		font-size: 40px;
	}
	
	@media (max-width: 960px)
	{
		max-width: none;
	}
	
	@media (max-width: 760px)
	{
		font-size: 27px;
		font-weight: 800;
		margin-bottom: 22px;
	}
`

export const AsideText = styled.p`
	color: #000;
	max-width: 432px;
	margin: 0 0 58px;
	
	@media (max-width: 1200px)
	{
		margin-bottom: 40px;
		max-width: 580px;
	}
	
	@media (max-width: 960px)
	{
		max-width: none;
	}
	
	@media (max-width: 760px)
	{
		font-size: 16px;
		margin-bottom: 34px;
	}
`
