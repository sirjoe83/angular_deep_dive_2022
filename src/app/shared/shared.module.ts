// src/app/shared/shared.module.ts

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabComponent } from './controls/tab/tab.component';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { ClickWithWarningDirective } from './controls/click-with-warning.directive';
import { TooltipDirective } from './tooltip.directive';
import { TableFieldDirective } from './controls/data-table/table-field.directive';
import { DataTableDirective } from './controls/data-table.directive';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CanDeactivateGuard } from './deactivation/can-deactivate.guard';
import { CustomPreloadingStrategy } from './preloading/custom-preloading-strategy';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,

    // Von der CLI eingefügt
    CityValidationDirective,
    TabbedPaneComponent,
    TabComponent,
    TabNavigatorComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    TableFieldDirective,
    DataTableDirective,
  ],
  providers: [],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,

    // Neue Einträge
    CityValidationDirective,
    TabbedPaneComponent,
    TabComponent,
    TabNavigatorComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    TableFieldDirective,
    DataTableDirective,
  ],
})
export class SharedModule {
  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard,
        CanDeactivateGuard,
        CustomPreloadingStrategy,
      ],
    };
  }
}
