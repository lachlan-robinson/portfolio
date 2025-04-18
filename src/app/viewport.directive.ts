import {
	Directive,
	ElementRef,
	Renderer2,
	OnInit,
	OnDestroy,
} from '@angular/core';

@Directive({
	selector: '[appViewport]',
	standalone: false,
})
export class ViewportDirective implements OnInit, OnDestroy {
	private observer!: IntersectionObserver;
	private isVisible = false; // Tracks visibility state

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						//console.log('Visible');
						this.renderer.addClass(entry.target, 'in-view');
						this.renderer.removeClass(entry.target, 'no-view');
					} else {
						//console.log('Not visible');
						this.renderer.removeClass(entry.target, 'in-view');
						this.renderer.addClass(entry.target, 'no-view');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px' } // Adjust rootMargin if needed
		);

		this.observer.observe(this.el.nativeElement);
	}

	ngOnDestroy() {
		//console.log('🛑 Observer disconnected for', this.el.nativeElement);
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
