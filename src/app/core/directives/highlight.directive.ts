import { AfterViewInit, Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input('appHighlight') toHighlight: boolean = true
  constructor(
    private elemRef: ElementRef,
  ) { }
  applyHighlight() {
    if (this.toHighlight) {
      this.elemRef.nativeElement.style.background = '#254061';
      this.elemRef.nativeElement.style.color = '#fff'
    }
    console.log(this.elemRef)
  }

  // ngOnInit(){
  //   this.applyHighlight()
  // }

  ngAfterViewInit() {
    this.applyHighlight()
  }
}
