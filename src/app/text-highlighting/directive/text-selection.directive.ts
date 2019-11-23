import { Directive, ElementRef, EventEmitter, NgZone, OnInit, Output } from '@angular/core';

export interface TextSelectEvent {
  text: string;
}

@Directive({
  selector: '[textSelect]',
})
export class TextSelectionDirective implements OnInit {

  @Output('textSelect')
  public textSelectEvent: EventEmitter<TextSelectEvent>;

  private elementRef: ElementRef;
  private zone: NgZone;


  constructor(elementRef: ElementRef, zone: NgZone) {
    this.textSelectEvent = new EventEmitter<TextSelectEvent>();
    this.elementRef = elementRef;
    this.zone = zone;

  }


  public ngOnInit(): void {
    this.zone.runOutsideAngular(
      () => {
        this.attachMouseDowEventToElement();
      });
  }


  private attachMouseDowEventToElement() {
    this.elementRef.nativeElement.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
  }

  private handleMouseDown() {
    console.log('Mouse down');
    this.addMouseUpEventToDocument();
  }


  private addMouseUpEventToDocument() {
    document.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
  }

  private handleMouseUp() {
    console.log('Mouse up');
    this.removeMouseUpEventFromDocument();
    this.processSelection();

  }

  private removeMouseUpEventFromDocument() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
  }

  private processSelection() {
    console.log('Process text selection');
  }
}
