import { Directive, ElementRef, Input } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Directive({
  selector: '[appBgColor]'
  
})
export class BgColorDirective {
  @Input('appBgColor') color: string;
  constructor(private element: ElementRef) {

  }
  ngOnChanges() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  ngOnInit() {
  }
}
