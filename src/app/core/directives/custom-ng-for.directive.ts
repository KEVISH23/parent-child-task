import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgFor]'
})
export class CustomNgForDirective {
  @Input() customForOf!: Array<any>
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  ngOnChanges() {
    this.viewContainerRef.clear()
    for (const input of this.customForOf) {
      console.log(input)
      this.viewContainerRef.createEmbeddedView(this.template, {
        $implicit: input,
        index: this.customForOf.indexOf(input)
      });
    }
  }
}
