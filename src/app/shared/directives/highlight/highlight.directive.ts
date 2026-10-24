import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = "#684fce"
   }

}
