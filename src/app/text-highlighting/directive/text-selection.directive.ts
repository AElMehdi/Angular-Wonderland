import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[textSelection]'
})
export class TextSelectionDirective {

  constructor(private element: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse enter')
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse leave')
    this.highlight(null);
  }

  private highlight(color: string) {
    console.log('reset the color')
    this.element.nativeElement.style.backgroundColor = color;
  }
}
