import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import OrderButton from '../../../../UI/buttons/OrderButton'
import { HeaderBannerStyled, HeaderBannerWrap, HeaderBannerWrap2, H1, AsideText } from './HeaderBanner.styledComponents'

import BannerBg from './img/bnr-bg.jpg'
import BannerBgMob from './img/bnr-bg-mob.png'
import styled from 'styled-components'

const BgImg = styled.img`
	max-width: 100%;
    width: 100%;
	
	@media (max-width: 760px)
	{
		display: none;
	}
`

const BgImgMob = styled(BgImg)`
	display: none;
	
	@media (max-width: 760px)
	{
		background: #fff;
		display: block;
		padding-bottom: 40px;
	}
`

const StyledOrderButton = styled(OrderButton)`
	padding: 21px 90px 20px;

	@media (max-width: 1200px)
	{
		padding: 12px 60px 13px;
	}
`

const HeaderBanner = ({h1Text, asideText, contactsRef}) => {
	return (
		<HeaderBannerStyled>
			<BgImg src={BannerBg} alt="" />
			<BgImgMob src={BannerBgMob} alt="" />
			<HeaderBannerWrap>
				<HeaderBannerWrap2>
					<H1>{h1Text}</H1>
					<AsideText>{asideText}</AsideText>
					<StyledOrderButton to="#contact-form-block" onClick={() => scroll.scrollTo(contactsRef.current.offsetTop, {smooth: true, duration: 500})}>Заказать</StyledOrderButton>
				</HeaderBannerWrap2>
			</HeaderBannerWrap>
		</HeaderBannerStyled>
	)
}

export default HeaderBanner