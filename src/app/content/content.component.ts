import { Component, HostListener, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	standalone: false,
	templateUrl: './content.component.html',
	styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
	isAtTop = true;

	ngOnInit(): void {}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isAtTop = window.pageYOffset === 0;
	}
}
