import React from 'react'
import AnimateHeight from 'react-animate-height';

import { Ul, Li, H5, ToggleBtn, TextDivWrap, TextDiv } from './ServicesList.styledComponents';

const ServicesList = ({faqItems, toggleOpened}) => {
	
	return (
		<Ul>
			{faqItems && 
				faqItems.map((item, idx) => {
					return <Li key={idx} className={item.opened? 'opened' : ''}>
						<H5>{item.text} <ToggleBtn type="button" onClick={() => toggleOpened(item)}></ToggleBtn></H5>
						<AnimateHeight duration={500} height={item.opened? 'auto' : 0}>
							<TextDivWrap>
								<TextDiv>{item.description}</TextDiv>
							</TextDivWrap>
						</AnimateHeight>
					</Li>
				})
			}
		</Ul>
  )
}

export default ServicesList