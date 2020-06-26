import { Directive, ElementRef, HostListener } from "@angular/core";
import $ from 'jquery';

@Directive({
    selector: '[tab]'
})
export class TabDirective {

    constructor (
        private elementRef: ElementRef
    ) { }

    @HostListener('click', ['$event']) onClick(event: any) {
        if (!this.elementRef.nativeElement.classList.contains('active')) {
            const currentTarget = $(this.elementRef.nativeElement).closest('a');

            // remove other tabs with active state
            currentTarget.closest('ul').find('a.active').removeClass('active');

            // set this tab as the active state
            currentTarget.addClass('active');

            // what is the old tab?
            const oldTab = currentTarget.closest('ul').parent().find('.tab-content').find('.tab-pane.active');

            // what should the new tab be?
            const newTab = currentTarget.closest('ul').parent().find('.tab-content').find(currentTarget.data('tab'));

            // animte the OLD tab out
            this.animateCSS(oldTab, 'fadeOut').then((message) => {
                // remove old tab active state
                oldTab.removeClass('active');
                newTab.addClass('active');
            });

            // animte the NEW tab in
            this.animateCSS(newTab, 'fadeIn').then((message) => {
            });
        }

        event.preventDefault();
    }

    animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;

            element.addClass(`${prefix}animated ${prefix}faster ${animationName}`);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd() {
                element.removeClass(`${prefix}animated ${prefix}faster ${animationName}`);
            
                element.off('animationend', handleAnimationEnd)
                resolve('Animation ended');
            }

            //node.addEventListener('animationend', handleAnimationEnd);
            element.on('animationend', handleAnimationEnd)
    });
}