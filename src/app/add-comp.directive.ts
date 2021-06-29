import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddComp]'
})
export class AddCompDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
