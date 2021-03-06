import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

export interface TextSelectEvent {
  text: string;
  viewportRectangle: SelectionContainer | null;
  hostRectangle: SelectionContainer | null;
}

interface SelectionContainer {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Directive({
  selector: '[appTextSelect]',
})
export class TextSelectionDirective implements OnInit, OnDestroy {

  @Output('appTextSelect')
  public textSelectEvent: EventEmitter<TextSelectEvent>;

  private elementRef: ElementRef;
  private hasSelection: boolean;
  private zone: NgZone;

  constructor(elementRef: ElementRef, zone: NgZone) {
    this.elementRef = elementRef;
    this.zone = zone;

    this.hasSelection = false;
    this.textSelectEvent = new EventEmitter<TextSelectEvent>();

  }


  public ngOnInit(): void {
    console.log('directive On init');
    // Needs to be done outside the angular zone to avoid changing the state by events that aren't related to our use case
    this.zone.runOutsideAngular(
      () => {
        // Add the mouse down event only on the element
        this.elementRef.nativeElement.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
      }
    );
  }


  public ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener('mousedown', this.handleMouseDown.bind(this), false);
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this), false);
    document.removeEventListener('selectionchange', this.handleSelectionChange.bind(this), false);

  }

  private handleMouseDown(): void {
    console.log('directive mouse down');
    // Add the mouse up event on the whole document
    document.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
  }


  private handleMouseUp(): void {
    console.log('directive mouse up');
    document.removeEventListener('mouseup', this.handleMouseUp, false);
    // React to the event
    this.processSelection();
  }


  private getRangeContainer(range: Range): Node {
    let container = range.commonAncestorContainer;

    // Check if the node is a div or text
    while (container.nodeType !== Node.ELEMENT_NODE) {
      container = container.parentNode;
    }

    return container;
  }


  private handleSelectionChange(): void {
    if (this.hasSelection) {
      this.processSelection();
    }
  }


  private isRangeFullyContained(range: Range): boolean {
    const hostElement = this.elementRef.nativeElement;
    let selectionContainer = range.commonAncestorContainer;

    while (selectionContainer.nodeType !== Node.ELEMENT_NODE) {
      selectionContainer = selectionContainer.parentNode;
    }

    return (hostElement.contains(selectionContainer));
  }


  private processSelection(): void {
    console.log('process selection');
    const selection = document.getSelection();

    if (this.hasSelection) {
      this.zone.runGuarded(
        () => {
          this.hasSelection = false;
          this.textSelectEvent.next({
            text: '',
            viewportRectangle: null,
            hostRectangle: null
          });
        }
      );
    }

    if (!selection.rangeCount || !selection.toString()) {
      return;
    }

    const range = selection.getRangeAt(0);
    const rangeContainer = this.getRangeContainer(range);

    if (this.elementRef.nativeElement.contains(rangeContainer)) {

      const viewportRectangle = range.getBoundingClientRect();
      const localRectangle = this.viewportToHost(viewportRectangle, rangeContainer);

      this.zone.runGuarded(
        () => {

          this.hasSelection = true;
          this.textSelectEvent.emit({
            text: selection.toString(),
            viewportRectangle: {
              left: viewportRectangle.left,
              top: viewportRectangle.top,
              width: viewportRectangle.width,
              height: viewportRectangle.height
            },
            hostRectangle: {
              left: localRectangle.left,
              top: localRectangle.top,
              width: localRectangle.width,
              height: localRectangle.height
            }
          });
        }
      );
    }
  }


  private viewportToHost(viewportRectangle: SelectionContainer, rangeContainer: Node): SelectionContainer {
    const host = this.elementRef.nativeElement;
    const hostRectangle = host.getBoundingClientRect();

    console.group('ViewportToHost');
    console.log('viewport', viewportRectangle);
    console.log('range container', rangeContainer);
    console.log('host element', host);
    console.log('host Rectangle', hostRectangle);
    console.groupEnd();

    let localLeft = (viewportRectangle.left - hostRectangle.left) - 10;
    let localTop = (viewportRectangle.top - hostRectangle.top) - 20;

    let node = rangeContainer;

    do {
      localLeft += (node as Element).scrollLeft;
      localTop += (node as Element).scrollTop;

      // tslint:disable-next-line:no-conditional-assignment
    } while ((node !== host) && (node = node.parentNode));

    return ({
      left: localLeft,
      top: localTop,
      width: viewportRectangle.width,
      height: viewportRectangle.height
    });
  }
}
