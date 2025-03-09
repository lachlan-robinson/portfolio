import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	standalone: false,
	templateUrl: './content.component.html',
	styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
	isAtTop = true;
	loaded = false;

	ngOnInit(): void {
		setTimeout(() => {
			this.loaded = true;
		}, 500);
	}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isAtTop = window.pageYOffset === 0;
	}
}
