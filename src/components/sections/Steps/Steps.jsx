import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SliderButtons from '../../UI/SliderButtons/SliderButtons'

import { StepsStyled, SectionWrap, H2Styled, SlideWrap, H5, SlideText, SlideImgDec } from './Steps.styledComponents'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";


const Slider = styled(SlickSlider)`
	margin-bottom: 59px;
	
	& .slick-list, 
	& .slick-track
	{
		display: flex;
		overflow: visible;
	}
	
	@media (max-width: 760px)
	{
		margin-bottom: 25px;
	}
	
	.slick-slide
	{
		background: #fff;
		border: 2px solid #67AEFC;
		border-radius: 15px;
		display: inline-flex;
		margin: 0 12px;
		padding: 84px 35px 54px 68px;
		width: 50%;
		
		@media (max-width: 1400px)
		{
			padding: 15px 30px 20px 30px;
		}
		
		& > div
		{
			align-items: center;
			display: flex;
			flex-wrap: wrap;
			
			@media (max-width: 760px)
			{
				flex-direction: column;
			}
		}
	}
`

const Steps = ({title, stepsSlides}) => {
	
	const sliderSettings = {
		infinite: false, 
		slidesToShow: 2,
		responsive: 
		[
			{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
		]
	}
	
	const [slider, setSlider] = useState();
	
	return (<StepsStyled id="steps-block">
		<SectionWrap>
			<H2Styled>{title}</H2Styled>
			{stepsSlides?
					<Slider ref={c => (setSlider(c))} {...sliderSettings}>
						{stepsSlides.map((slide, idx) => {
							return <React.Fragment key={idx}>
								<H5>{idx}. {slide.title}</H5>
								<SlideText>{slide.description}</SlideText>
								<SlideImgDec src={slide.decImage} alt="" />
							</React.Fragment>
						})}
					</Slider>
				:
					<H2Styled>Нет слайдов для показа</H2Styled>
			}
			<SliderButtons slider={slider} />
		</SectionWrap>
	</StepsStyled>
	)
}

export default Steps