import styled from "styled-components"
import SliderButtons from '../../UI/SliderButtons/SliderButtons'
import H2 from '../../UI/heading/H2'
import { globalComponentStyles } from '../../globalComponentStyles'

const stepsBg = require('./img/projects-bg.png') || '';

export const ProjectSliderButtons = styled(SliderButtons)``;

export const ProjectsStyled = styled.section`
	${stepsBg? 'background: #DAECFF url('+stepsBg+') center center no-repeat;' : 'background: #DAECFF;'}
    background-size: contain;
    padding: 121px 0 83px;
	
	
	${ProjectSliderButtons}
	{
		display: none;
		
		@media (max-width: 920px)
		{
			padding-top: 10px;
		}
	}

	.slick-slider ~ ${ProjectSliderButtons}
	{
		display: flex;
	}
	
	.slick-slider .slick-list
    {
        margin-bottom: -15px;
    }
	
	@media (max-width: 760px)
	{
		background: #DAECFF;
		padding: 25px 0 30px;
	}
`

export const SectionWrap = styled.div`
	${globalComponentStyles.section}
	max-width: 1224px;
`


export const H2Styled = styled(H2)`
	margin-bottom: 49px;
`

export const ProjectsWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	
	@media (max-width: 920px)
	{
		justify-content: center;
		
		&.slick-slider
		{
			display: block;
		}
	}
`

export const Hider = styled.div`
	background: #67AEFC;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-weight: 400;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	text-align: center;
	opacity: 0;
	transition: all .4s;
	
	b
	{
		font-size: 21px;
		font-weight: bold;
	}
`

export const ProjectItem = styled.a`
	display: inline-flex;
    flex-direction: column;
    border-radius: 15px;
    margin: 0 15px 37px;
    overflow: hidden;
    width: calc(50% - 30px);
    position: relative;
	
	&:hover ${Hider}
	{
		opacity: 1;
	}
	
	@media (max-width: 920px)
	{
		max-width: 650px;
		width: 100%;
		
		.slick-slider &
		{
			margin: 0 0 15px;
		}
	}
`

export const ProjectImage = styled.img`
	object-fit: cover;
	height: 100%;
	max-width: 100%;
	width: 100%;
`