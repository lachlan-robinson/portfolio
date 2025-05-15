import { Component } from '@angular/core';
import { Project } from './model/project';

@Component({
	selector: 'app-projects',
	standalone: false,
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	// The portfolioApp object contains information about a portfolio website project.
	portfolioProject: Project = {
		title: 'Portfolio Website',
		description:
			'My personal portfolio to demonstrate my design and development capabilities.',
		features: [
			'Tailwind CSS for styling and design.',
			'Responsive Design for mobile and larger screens.',
			'Animation on scroll using directive.',
		],
		imgSrc: 'project-img/portfolio-dark.png',
		githubLink: 'https://github.com/lachlan-robinson/portfolio',
		technologies: ['HTML', 'CSS', 'Tailwind', 'Typescript', 'Angular'],
	};

	ontrackProject: Project = {
		title: 'Ontrack',
		description:
			'OnTrack (also known as Doubtfire) is an innovative Learning Management System that are designed for a skill-based course delivery model. My role in this project was to develop the frontend of the application, specifically focussing on front-end migration to angular 17.',
		features: [
			'The frontend of this project is primarily built with TypeScript and Angular.',
			'The backend is a Ruby on Rails project.',
			'The deployment of the entire software stack is done with docker to improve turnaround time and portability.',
		],
		imgSrc: 'project-img/ontrack.svg',
		githubLink: '',
		technologies: [
			'HTML',
			'CSS',
			'Tailwind',
			'Typescript',
			'Angular',
			'Angular Material',
			'GitHub',
		],
	};

	todoProject: Project = {
		title: 'Todo App',
		description:
			'A simple Todo application built with Angular and TypeScript.',
		features: [
			'Users can create, edit, and delete tasks.',
			'Tasks can be marked as completed or pending.',
			'Tasks are stored in local storage for persistence.',
			'The app is responsive and works on both mobile and desktop devices.',
		],
		imgSrc: 'project-img/todolight.png',
		githubLink: 'https://github.com/lachlan-robinson/angular-todo',
		technologies: [
			'HTML',
			'CSS',
			'Tailwind',
			'Typescript',
			'Angular',
			'Angular Material',
			'GitHub',
		],
	};

	// The projects array contains the list of projects to be displayed in the component.
	projects: Project[] = [
		this.ontrackProject,
		this.portfolioProject,
		this.todoProject,
	];

	// The technologies array contains the list of technologies used in the projects.
	technologies = [
		{ name: 'HTML', logo: 'html-logo.svg' },
		{ name: 'CSS', logo: 'css-logo.svg' },
		{ name: 'Tailwind', logo: 'tailwind-logo.svg' },
		{ name: 'Typescript', logo: 'typescript-logo.svg' },
		{ name: 'Angular', logo: 'angular-logo.svg' },
		{ name: 'Angular Material', logo: 'angular-logo.svg' },
		{ name: 'Bootstrap', logo: 'bootstrap-logo.svg' },
		{ name: 'JavaScript', logo: 'js-logo.svg' },
		{ name: 'GitHub', logo: 'git-logo.svg' },
	];

	getTechnology(input: string) {
		return this.technologies.find((tech) => tech.name === input);
	}
}
