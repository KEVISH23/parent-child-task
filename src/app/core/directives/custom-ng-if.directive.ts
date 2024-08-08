import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective {
  @Input('appCustomNgIf') set demo(state :any){
    this.viewContainerRef.createEmbeddedView(this.templateRef)
    if(!state){
      this.viewContainerRef.clear()
    }
    
  }
  constructor(
    private templateRef:TemplateRef<unknown>,
    private viewContainerRef:ViewContainerRef
  ) { }

}
