import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],
  providers: [TabbedPaneService],
})
export class TabbedPaneComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  @ViewChild('navigator')
  navigator: TabNavigatorComponent | undefined;

  activeTab: TabComponent | undefined;

  // Add:
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  constructor(private service: TabbedPaneService) {}

  ngAfterViewInit(): void {
    this.service.pageCount.next(this.tabs.length);
    this.service.currentPage.subscribe((page: number) => {
      // Prevent cycle:
      if (page === this.currentPage) {
        return;
      }
      this.pageChange(page);
    });
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
  }

  ngOnInit(): void {}

  activate(active: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = tab === active;
    }
    this.activeTab = active;
    // Update:
    this.currentPage = this.tabs.indexOf(active) + 1;
    this.service.currentPage.next(this.currentPage);
  }

  // Add:
  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
