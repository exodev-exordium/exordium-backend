import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[navbarDropdown]'
})

export class NavbarDirective {

    constructor (
        private elementRef: ElementRef, 
        private renderer: Renderer2
    ) { }

    @HostListener('click', ['$event']) onClick(event) {
        if (this.elementRef.nativeElement.classList.contains('c-show')) {
            this.renderer.removeClass(this.elementRef.nativeElement, 'c-show');
            this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'false')
            this.renderer.removeClass(this.elementRef.nativeElement.childNodes[1], 'c-show')
        } else {
            this.renderer.addClass(this.elementRef.nativeElement, 'c-show')
            this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'true')
            this.renderer.addClass(this.elementRef.nativeElement.childNodes[1], 'c-show')
        }
    }
}