import React from 'react'
import styled from 'styled-components';

const SliderButtonsStyled = styled.div`
	display: flex;
	justify-content: center;
`

const arrImg = require('./img/arr-slider.svg').default || '';

const SliderButton = styled.button`
	background: ${arrImg? '#fff url('+arrImg+') center center no-repeat;' : '#fff;'}
	border: 2px solid #67AEFC;
	border-radius: 15px;
	cursor: pointer;
	margin: 0 15px;
	height: 60px;
	width: 60px;
	transform: rotate(90deg);
	transition: all .3s;
	
	&:active
	{
		background-color: #67AEFC;
	}
	
	& + button
	{
		transform: rotate(-90deg);
	}
`

const SliderButtons = ({slider, props}) => {

	return (
		<SliderButtonsStyled {...props}>
			<SliderButton className="arrow-prev" type="button" onClick={() => slider.slickPrev()} />
			<SliderButton className="arrow-next" type="button" onClick={() => slider.slickNext()} />
		</SliderButtonsStyled>
	)
}

export default SliderButtons