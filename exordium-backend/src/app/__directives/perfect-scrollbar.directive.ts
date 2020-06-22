import { Directive, OnInit, ElementRef } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
    selector: '[perfectScrollbar]'
})
export class ScrollbarDirective implements OnInit {

    constructor (
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        const ps = new PerfectScrollbar(this.elementRef.nativeElement);
    }

}