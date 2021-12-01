import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  constructor(private eleRefs: ElementRef) {}

  @Input() pColor;
  @Input() sColor;

  @HostBinding('style.color') eleRef;

  @HostListener('click')
  onClick() {
    this.eleRef = this.eleRef === this.pColor ? this.sColor : this.pColor;
  }
}

@Directive({
  selector: '[show]',
})
export class ShowDirective {
  constructor(
    private tempRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

  @Input() show: boolean;

  ngOnChanges() {
    if (this.show) {
      this.viewRef.createEmbeddedView(this.tempRef);
    } else {
      this.viewRef.clear();
    }
  }
}
