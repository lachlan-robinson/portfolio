import { Component } from '@angular/core';
import { Project } from './model/project';

@Component({
	selector: 'app-projects',
	standalone: false,
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	// The weatherApp object contains information about a weather application project.
	weatherProject: Project = {
		title: 'Weather App',
		description:
			'This is a simple yet effective weather application built using Angular, TypeScript, and Bootstrap. The app allows users to search for weather conditions in any city using the OpenWeatherMap API. It provides real-time weather updates, including temperature, humidity, wind speed, and a short description of the current weather.',
		features: [
			'Users can enter a city name in the search bar to retrieve weather data.',
			'Fetches and displays current temperature, weather conditions, humidity, and wind speed.',
			'Uses icons from OpenWeatherMap to visually represent weather conditions.',
			'Uses the OpenWeatherMap API to fetch live weather data.',
		],
		imgSrc: 'project-img/dark.jpg',
		technologies: ['HTML', 'Bootstrap', 'Typescript', 'Angular'],
	};
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
		imgSrc: 'project-img/portfolio.jpg',
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
		imgSrc: 'project-img/portfolio.jpg',
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
		this.weatherProject,
		this.portfolioProject,
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
