import { Component } from '@angular/core';

@Component({
	selector: 'app-skills',
	standalone: false,
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	frontEndSkills = [
		{ logo: 'html-logo.svg', name: 'HTML', description: 'Markup' },
		{ logo: 'css-logo.svg', name: 'CSS', description: 'Styling' },
		{
			logo: 'tailwind-logo.svg',
			name: 'Tailwind',
			description: 'CSS Framework',
		},
		{
			logo: 'bootstrap-logo.svg',
			name: 'Bootstrap',
			description: 'CSS Framework',
		},
		{
			logo: 'js-logo.svg',
			name: 'JavaScript',
			description: 'Programming Language',
		},
		{
			logo: 'typescript-logo.svg',
			name: 'TypeScript',
			description: 'Type-Safe JavaScript',
		},
		{
			logo: 'angular-logo.svg',
			name: 'Angular',
			description: 'Front-End Framework',
		},
	];

	backEndSkills = [
		{
			logo: 'node-logo.svg',
			name: 'Node.js',
			description: 'JavaScript Runtime Environment',
		},
	];

	tools = [
		{ logo: 'git-logo.svg', name: 'Git', description: 'Version Control' },
	];
}
