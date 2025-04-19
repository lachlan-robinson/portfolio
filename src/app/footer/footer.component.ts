import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: false,
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
})
export class FooterComponent {
	darkmode: boolean = false;

	ngOnInit() {
		this.darkmode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		this.updateTheme();
	}

	//Handle the click event to toggle dark mode.
	handleClick() {
		this.darkmode = !this.darkmode;
		this.updateTheme();
	}

	//Update the theme based on the darkmode property.
	updateTheme() {
		const htmlElement = document.documentElement;
		this.darkmode
			? htmlElement.setAttribute('data-theme', 'dark')
			: htmlElement.removeAttribute('data-theme');
		console.log('this.darkmode: ' + this.darkmode);
	}
}
