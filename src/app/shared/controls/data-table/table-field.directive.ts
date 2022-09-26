import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableField]',
})
export class TableFieldDirective {
  @Input('appTableFieldAs') propName = '';

  constructor(public templateRef: TemplateRef<any>) {}
}
