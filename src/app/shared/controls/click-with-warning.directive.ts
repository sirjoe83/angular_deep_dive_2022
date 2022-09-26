import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]',
})
export class ClickWithWarningDirective implements OnInit {
  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter();

  @HostBinding('class') classBinding: string | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.classBinding = 'btn btn-danger';
  }
}
