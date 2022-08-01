import styled from "styled-components"
import { globalComponentStyles } from '../../globalComponentStyles'
import H2 from "../../UI/heading/H2";

const stepsBg = require('./img/steps-bg.png') || '';

export const StepsStyled = styled.section`
	${stepsBg? 'background: url('+stepsBg+') bottom right no-repeat;' : ''}
	background-size: contain;
	overflow: hidden;
	padding: 122px 0 128px;
	
	@media (max-width: 760px)
	{
		padding-top: 42px;
		padding-bottom: 45px;
	}
`

export const SectionWrap = styled.div`
	${globalComponentStyles.section}
	max-width: 1400px;
`

export const H2Styled = styled(H2)`
	margin-bottom: 84px;
	
	@media (max-width: 760px)
	{
		margin-bottom: 23px;
	}
`

export const SlideWrap = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	
	@media (max-width: 760px)
	{
		flex-direction: column;
	}
`

export const H5 = styled.div`
	color: #000;
	font-size: 21px;
	font-weight: bold;
	margin: 0;
	width: 100%;
	
	@media (max-width: 760px)
	{
		font-size: 17px;
		font-weight: 800;
		margin-bottom: 10px;
	}
`

export const SlideText = styled.div`
	flex: 1;
	font-size: 18px;
	line-height: 1.4;
	padding-right: 10px;
	word-break: break-word;
	
	@media (max-width: 760px)
	{
		font-size: 17px;
	}
`

export const SlideImgDec = styled.img`
	flex-grow: 0;
	max-width: 100%;
`
