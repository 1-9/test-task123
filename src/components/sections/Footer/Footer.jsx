import React from 'react'
import { SiteFooterStyled, FooterWrap, Topline, LogoWrap, Socials, SocialLink, FooterCol, PhonesBlock, EmailsBlock, Copyright } from './Footer.styledComponents'

import Logo from '../../../img/logo.svg'


const Footer = ({contactPhones, socialLinks, contactEmails, copyright}) => {
  return (<SiteFooterStyled>
		<FooterWrap>
			<Topline>
				<FooterCol>
					<LogoWrap href="/"><img src={Logo} alt="" /></LogoWrap>
					<Socials>
						{socialLinks.length > 0 
							&& socialLinks.map((item, idx) => {
								return <SocialLink style={{background: 'url('+item.image+') 0 0 no-repeat', backgroundSize: 'contain'}} key={idx} href={item.link} />
							})
						}
					</Socials>
				</FooterCol>
				<PhonesBlock>
					<LogoWrap className="sp-hidden-pc"><img src={Logo} alt="" /></LogoWrap>
					{contactPhones.length > 0 && 
						contactPhones.map((item, idx) => {
							return <a key={idx} href={item.prefix + encodeURI(item.phone)}>{item.name}: {item.phone}</a>
						})
					}
				</PhonesBlock>
				<EmailsBlock>
					{contactEmails.length > 0 && 
						contactEmails.map((item, idx) => {
							return <a key={idx} href={'mailto:' + item}>{item}</a>
						})
					}
				</EmailsBlock>
			</Topline>
			<Copyright>{copyright}</Copyright>
		</FooterWrap>
	</SiteFooterStyled>)
}

export default Footer