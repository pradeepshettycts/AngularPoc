import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';
import { AddCompDirective } from '../add-comp.directive';
import { ButtonComponent } from '../button/button.component';
import { LableComponent } from '../lable/lable.component';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  componentRef: any;

  @ViewChild(AddCompDirective, {static: true}) entry!: AddCompDirective;
  interval: any;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

  elementsList:EIdata[] = [
    { name: 'Text box', type: 'elements' },
    { name: 'Button', type: 'elements' },
    { name: 'Lable', type: 'elements' },

  ];

  dragEnabled = true;

  onVegetableDrop(e: DropEvent) {
    const viewContainerRef = this.entry.viewContainerRef;
    viewContainerRef.clear();
    if (e.dragData.name == 'Text box') {
      const factory = this.resolver.resolveComponentFactory(TextBoxComponent);
      this.componentRef = viewContainerRef.createComponent(factory);
    } else if (e.dragData.name == 'Button') {
      const factory = this.resolver.resolveComponentFactory(ButtonComponent);
      this.componentRef = viewContainerRef.createComponent(factory);
    }
    else if (e.dragData.name == 'Lable') {
      const factory = this.resolver.resolveComponentFactory(LableComponent);
      this.componentRef = viewContainerRef.createComponent(factory);
    }
    this.componentRef.instance.msg="Draged from its parent"
  }

}

interface EIdata {
  name: string;
  type: string;
}