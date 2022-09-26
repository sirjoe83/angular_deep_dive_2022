import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { TableFieldDirective } from './data-table/table-field.directive';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableDirective implements OnInit {
  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;
  get fieldList() {
    return this.fields?.toArray();
  }
  @Input() data: Array<any> = [];
  constructor() {}
  ngOnInit(): void {}
}
