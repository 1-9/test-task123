import React from 'react'
import styled from 'styled-components';
import { useForm } from '../../../hooks/useForm';

import FormInput from '../../UI/inputs/FormInput';
import FormSubmit from '../../UI/inputs/FormSubmit';
import { ContactStyled, SectionWrap, FormWrap, H2Styled, AsideText } from './Contact.styledComponents'


const decorativeImage1 = require('./img/contact-dec1.png') || '';
const decorativeImage2 = require('./img/contact-dec2.png') || '';
const decorativeMobileImage = require('./img/form-dec-img-mob.png') || '';

const DecorativeImage = styled.img`
	@media (max-width: 960px)
	{
		position: absolute;
		left: 20px;
		
		& ~ &
		{
			left: auto;
			right: 20px;
		}
	}
	
	@media (max-width: 760px)
	{
		display: none;
		
		&.sp-hidden-pc
		{
			display: block;
			position: static;
		}
	}
`

const ErrorMessage = styled.p`
	color: red;
`
  
const Contact = React.forwardRef(({title, description}, ref) => {
	
	const { handleSubmit, handleChange, data, errors } = useForm({
		validations: 
		{
			name: 
			{
				pattern: 
				{
					value: '^[A-Za-zа-яА-Я]*$',
					message: "Поле имени не должно содержать специальных символов и цифр",
				}, 
				required: 
				{
					value: true,
					message: 'Поле "Имя" обязательно',
				}, 
				custom: 
				{
					isValid: (value) => value.length > 1,
					message: 'Имя должно состоять минимум с двух символов',
				}
			},
			messenger: 
			{
				pattern: 
				{
					value: '^[A-Za-z_1-9]*$',
					message: 'Поле "Telegram/Viber" может сожержать только лантиницу, цифры и символ подчеркивания (_)',
				}, 
				required: 
				{
					value: true,
					message: 'Поле "Telegram/Viber" обязательно',
				}, 
				custom: 
				{
					isValid: (value) => value.length > 2,
					message: 'Контактный месседжер должно состоять минимум с трех символов',
				}
			},
			email: 
			{
				pattern: 
				{
					value: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$',
					message: 'Поле "Email" может сожержать только лантиницу, цифры и некоторые специальные символы: @ ("собака") _ (подчеркивание) . (точка) ',
				}, 
				required: 
				{
					value: true,
					message: 'Поле "Email" обязательно',
				}, 
				custom: 
				{
					isValid: (value) => value.length > 4,
					message: 'Email должен состоять минимум с пяти символов',
				}
			},
		},
		onSubmit: () => alert('Форма успешно отправлена'),
		initialValues: {
			name: '',
			messenger: '',
			email: '',
		},
	});
	
	return (<ContactStyled id="contact-form-block" ref={ref}>
		<SectionWrap>
			<DecorativeImage src={decorativeImage1} alt="" />
			<FormWrap>
				<H2Styled>{title}</H2Styled>
				<AsideText>{description}</AsideText>
				<form className="cotact-form" onSubmit={handleSubmit}>
					
					{errors.name && Object.entries(errors.name).map((el) => <ErrorMessage key={Math.ceil(Math.random() * 10000)}>{el[1]}</ErrorMessage>)}
					{errors.messenger && Object.entries(errors.messenger).map((el) => <ErrorMessage key={Math.ceil(Math.random() * 10000)}>{el[1]}</ErrorMessage>)}
					{errors.email && Object.entries(errors.email).map((el) => <ErrorMessage key={Math.ceil(Math.random() * 10000)}>{el[1]}</ErrorMessage>)}
					
					<FormInput type="text" name="name" placeholder="Имя" value={data.name || ''} onChange={handleChange('name')} />
					<FormInput type="text" name="messenger" placeholder="Telegram/Viber" value={data.messenger || ''} onChange={handleChange('messenger')} />
					<FormInput type="email" name="email" placeholder="Email" value={data.email || ''} onChange={handleChange('email')} />
					<FormSubmit type="submit" value="Отправить" />
				</form>
			</FormWrap>
			<DecorativeImage src={decorativeImage2} alt="" />
			<DecorativeImage src={decorativeMobileImage} alt="" className="sp-hidden-pc" />
		</SectionWrap>
	</ContactStyled>
	)
})

export default Contact