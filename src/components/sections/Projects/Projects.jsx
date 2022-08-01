import React from 'react'
import { ProjectsStyled, SectionWrap, H2Styled, ProjectsWrap, Hider, ProjectItem, ProjectImage, ProjectSliderButtons } from './Projects.styledComponents'

const Projects = ({title, projectsItems}) => {
  return (<ProjectsStyled id="projects-block">
		<SectionWrap>
			<H2Styled>{title}</H2Styled>
			{projectsItems?
					<ProjectsWrap>
						{projectsItems.map((project, idx) => {
							return <ProjectItem href="#" key={idx}>
								<ProjectImage src={project.image} alt="" />
								<Hider>
									<h5><b>{project.title}</b><br /> {project.description}</h5>
								</Hider>
							</ProjectItem>
						})}
					</ProjectsWrap>
				:
					<H2Styled>Список проектов на данный момент пуст</H2Styled>
			}
		</SectionWrap>
	</ProjectsStyled>
  )
}

export default Projects