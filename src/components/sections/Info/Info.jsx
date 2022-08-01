import React from 'react'
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll";
import { globalComponentStyles } from '../../globalComponentStyles'
import OrderButton from '../../UI/buttons/OrderButton';
import H2 from '../../UI/heading/H2';

const infoBg = require('./img/info-bg.png') || '';
const infoDecorationImage = require('./img/info-dec.png') || '';

const InfoStyled = styled.section`
	${infoBg? 'background: url('+infoBg+') left top no-repeat;' : ''}
	background-size: contain;
	padding: 135px 0 104px;
	
	@media (max-width: 760px)
	{
		padding-top: 43px;
		padding-bottom: 50px;
	}
`

const SectionWrap = styled.div`
	${globalComponentStyles.section}
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	max-width: 1430px;
	justify-content: space-between;
`

const H2Styled = styled(H2)`
	margin-bottom: 53px;
	text-align: left;
	
	@media (max-width: 920px)
	{
		margin-bottom: 30px;
		text-align: center;
	}
`

const WrapBlock = styled.div`
	flex: 1;
    max-width: 670px;
	
	@media (max-width: 920px)
	{
		align-items: center;
		display: flex;
		flex-direction: column;
		max-width: none;
	}
`

const DecorationImage = styled.img`
	flex-grow: 0;
	
	@media (max-width: 1200px)
	{
		width: 50%;
	}
	
	@media (max-width: 960px)
	{
		width: 60%;
	}
	
	@media (max-width: 920px)
	{
		display: none;
		margin-bottom: 20px;
		
		&.sp-hidden-pc
		{
			display: block;
		}
	}
`

const Text = styled.div`
	font-size: 18px;
	margin-bottom: 49px;
	line-height: 1.4;
	
	@media (max-width: 760px)
	{
		font-size: 17px;
		margin-bottom: 23px;
	}
`

const CallFormButton = styled(OrderButton)`
	padding: 20px 54px 21px;
`

const Info = ({title, description, contactsRef}) => {
  return (<InfoStyled id="info-block">
		<SectionWrap>
			<WrapBlock>
				<H2Styled>{title}</H2Styled>
				{infoDecorationImage? <DecorationImage src={infoDecorationImage} alt="" className="sp-hidden-pc" /> : "" }
				<Text>{description}</Text>
				<CallFormButton to="#contact-form-block" onClick={() => scroll.scrollTo(contactsRef.current.offsetTop, {smooth: true, duration: 500})}>Оставить заявку</CallFormButton>
			</WrapBlock>
			{infoDecorationImage? <DecorationImage src={infoDecorationImage} alt="" /> : "" }
		</SectionWrap>
	</InfoStyled>
  )
}

export default Info