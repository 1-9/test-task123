import React from 'react'
import styled from 'styled-components'
import { globalComponentStyles } from '../../globalComponentStyles'
import H2 from '../../UI/heading/H2'

import ServicesList from './ServicesList/ServicesList'

import servicesBg from './img/services-bg.png';

const Section = styled.section`
	background: #DAECFF url(${servicesBg}) bottom right no-repeat;
	background-size: contain;
	padding: 119px 0 104px;
	
	@media (max-width: 760px)
	{
		background: #DAECFF;
		padding-top: 17px;
		padding-bottom: 14px;
	}
`

const H2Styled = styled(H2)`
	margin-bottom: 77px;
	
	@media (max-width: 760px)
	{
		margin-bottom: 26px;
	}
`

const Wrap = styled.div`
	${globalComponentStyles.section}
`

const Faq = ({title, faqItems, toggleOpened}) => {
	return (
		<Section id="services-block">
			<Wrap>
				<H2Styled>{title}</H2Styled>
				<ServicesList faqItems={faqItems} toggleOpened={toggleOpened} />
			</Wrap>
		</Section>
  )
}

export default Faq