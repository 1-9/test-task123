import styled from "styled-components"
import { globalComponentStyles } from '../../globalComponentStyles'
import H2 from "../../UI/heading/H2"

export const ContactStyled = styled.section`
	background: #DAECFF;
	background-size: contain;
	padding: 179px 0 128px;
	text-align: center;
	
	@media (max-width: 760px)
	{
		padding: 42px 0 25px;
	}
`

export const SectionWrap = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	max-width: 1230px;
	margin: 0 auto;
	
	@media (max-width: 960px)
	{
		position: relative;
		z-index: 2;
	}
	
	@media (max-width: 760px)
	{
		flex-direction: column;
	}
`

export const FormWrap = styled.div`
	${globalComponentStyles.section}
	max-width: 500px;
`

export const H2Styled = styled(H2)`
	margin-bottom: 35px;
	
	@media (max-width: 760px)
	{
		margin-bottom: 17px;
	}
`

export const AsideText = styled.p`
	font-size: 18px;
	line-height: 1.7;
	margin: 0 0 27px;
	
	@media (max-width: 760px)
	{
		font-size: 17px;
		margin-bottom: 25px;
	}
`

