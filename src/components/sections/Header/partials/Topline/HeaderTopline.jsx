import React, { useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { HeaderToplineStyled, MobileMenuButtonStyled, LogoWrapStyled, HeaderNavStyled } from './HeaderTopline.styledComponents'
import OrderButton from '../../../../UI/buttons/OrderButton'

import Logo from '../../../../../img/logo.svg'
import styled from 'styled-components'


const OrderButtonStyled = styled(OrderButton)`
	@media (max-width: 960px)
	{
		display: none;
	}
`


const HeaderTopline = ({navElems, contactsRef, ...props}) => {
	
	const [toggleMobileNav, setToggleMobileNav] = useState(false);
	
	return (
		<HeaderToplineStyled {...props}>
			<LogoWrapStyled to="/"><img src={Logo} alt="" /></LogoWrapStyled>
			{navElems && (
					<HeaderNavStyled className={toggleMobileNav? 'active' : ''}>
						{navElems.map((elem, i) => {
							return <li key={i}><ScrollLink smooth={true} duration={500} to={elem.href}>{elem.name}</ScrollLink></li>
						})}
					</HeaderNavStyled>
				)
			}
			<OrderButtonStyled to="#contact-form-block" onClick={() => scroll.scrollTo(contactsRef.current.offsetTop, {smooth: true, duration: 500})}>Заказать</OrderButtonStyled>
			<MobileMenuButtonStyled type="button" onClick={() => setToggleMobileNav(!toggleMobileNav)}><span></span><span></span><span></span></MobileMenuButtonStyled>
		</HeaderToplineStyled>
	)
}

export default HeaderTopline