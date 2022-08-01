import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Header from './components/sections/Header/Header';
import { useRef, useState } from 'react';
import Faq from './components/sections/Faq/Faq';
import Steps from './components/sections/Steps/Steps';
	import stepsImages from './img/steps/index';
import Projects from './components/sections/Projects/Projects';
	import projectImages from './img/projects/index';
import Info from './components/sections/Info/Info';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
	import socialIcons from './img/socials';



function App() {
	
	const navElems = [
		{ name: "Услуги", href: "services-block"}, 
		{ name: "Портфолио", href: "projects-block"}, 
		{ name: "Этапы", href: "steps-block"}, 
		{ name: "Дизайнеры", href: "info-block"}
	];
	
	const [faqItems, setFaqItems] = useState([
		{
			text: "Дизайн портала",
			description: "Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.", 
			opened: false
		}, 
		{
			text: "Дизайн адаптивной мобильной версии",
			description: <><p>Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий.</p>
				<p>При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML.</p>
				<p>Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.</p></>, 
			opened: false
		}, 
		{
			text: "Дизайн десктопной версии",
			description: "Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.", 
			opened: false
		}, 
		{
			text: "Пользовательский интерфейс",
			description: "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.", 
			opened: false
		}, 
		{
			text: "Микро UX",
			description: "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.", 
			opened: false
		}
	]);
	
	const stepsList = [
		{
			title: 'Анализ',
			description: 'Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.',
			decImage: stepsImages.img1
		}, 
		{
			title: 'Визуальное решение',
			description: 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.',
			decImage: stepsImages.img2
		}, 
		{
			title: 'Техническая реализация',
			description: 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.',
			decImage: stepsImages.img3
		}, 
		{
			title: 'Наполнение контентом',
			description: 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.',
			decImage: stepsImages.img4
		}, 
		{
			title: 'Тестирование',
			description: 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
			decImage: stepsImages.img5
		}, 
	]
	
	const projectsItems = [
		{
			title: 'Онлайн-магазин',
			description: 'для оптовых покупок',
			image: projectImages.img1
		}, 
		{
			title: 'Онлайн-магазин',
			description: 'для флористов',
			image: projectImages.img2
		}, 
		{
			title: 'Онлайн-магазин',
			description: 'для парикмахеров',
			image: projectImages.img3
		}, 
		{
			title: 'Онлайн-магазин',
			description: 'для визажистов',
			image: projectImages.img4
		}, 
		{
			title: 'Онлайн-магазин',
			description: 'для кондитеров',
			image: projectImages.img5
		}, 
		{
			title: 'Онлайн-магазин',
			description: 'для художников',
			image: projectImages.img6
		}, 
	]
	
	const contactPhones = [
		{
			name: 'Валерия',
			phone: '+79805585949',
			prefix: 'viber://chat?number='
		},
		{
			name: 'Анна',
			phone: '+79805585949',
			prefix: 'viber://chat?number='
		},
		{
			name: 'Валерия',
			phone: '+79805585949',
			prefix: 'viber://chat?number='
		},
	]
	
	const socialLinks = [
		{
			link: '#',
			className: 'social-lnk-ig',
			image: socialIcons.intagram
		},
		{
			link: '#',
			className: 'social-lnk-fb',
			image: socialIcons.facebook
		},
		{
			link: '#',
			className: 'social-lnk-tg',
			image: socialIcons.telegram
		},
		{
			link: '#',
			className: 'social-lnk-vb',
			image: socialIcons.viber
		},
		{
			link: '#',
			className: 'social-lnk-wa',
			image: socialIcons.watsapp
		},
	]
	
	const contactEmails = [
		'hr@dv-s.com'
	]
	
	const toggleOpened = (item) => {
		
		setFaqItems(faqItems.map(i => i === item? {...i, opened: !i.opened} : i));
	}
	
	const contactsRef = useRef();
	
	return (
		<div className="App site-wrapper">
			<BrowserRouter>
				<Header contactsRef={contactsRef} navElems={navElems} h1Text="Разработка интернет-магазина с нуля за неделю" asideText="Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета - от фирменного стиля до пользовательского интерфейса в сжатые сроки с командой Virtual Designers" />
				<main className="site-main">
					<Faq faqItems={faqItems} toggleOpened={toggleOpened} title="Что входит в услугу по созданию дизайна интернет-магазина?" />
					<Steps stepsSlides={stepsList} title='Этапы разработки интернет-магазина' />
					<Projects projectsItems={projectsItems} title="Примеры онлайн-магазинов" />
					<Info contactsRef={contactsRef} title="Необходимо больше информации?" description="Если Вы владелец онлайн-магазина или только начинаете свой путь в электронной коммерции и вам нужен уникальный дизайн онлайн магазина для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий период времени, он поможет  визуализировать ваш веб проект." />
					<Contact ref={contactsRef} title="Обсудить проект" description="Расскажите о своих бизнес-целях и мы поможем вам в их достижении" />
				</main>
				<Footer contactPhones={contactPhones} socialLinks={socialLinks} contactEmails={contactEmails} copyright="Developers 2018-2021 &copy; All rights reserved" />
			</BrowserRouter>
		</div>
	);
}

export default App;
