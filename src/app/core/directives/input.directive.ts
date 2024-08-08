import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input:not([type="text"])'
})
export class InputDirective implements AfterViewInit {

  constructor(
    private elemRef:ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.elemRef.nativeElement.style.backgroundColor = "white"
  }
}
