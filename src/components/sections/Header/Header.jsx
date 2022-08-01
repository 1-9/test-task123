import React from 'react'
import styled from 'styled-components'
import HeaderTopline from './partials/Topline/HeaderTopline'
import HeaderBanner from './partials/Banner/HeaderBanner'

const HeaderStyled = styled.header`
	background: #67AEFC;
`

const Header = ({navElems, h1Text, asideText, contactsRef}) => 
{
	return (
		<HeaderStyled>
			<HeaderTopline contactsRef={contactsRef} navElems={navElems} />
			<HeaderBanner contactsRef={contactsRef} h1Text={h1Text} asideText={asideText} />
		</HeaderStyled>
	)
}

export default Header