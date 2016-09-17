import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwelveColumnComponent } from './twelve-column.component';

@NgModule({
  imports: [CommonModule],
  exports: [TwelveColumnComponent],
  declarations: [TwelveColumnComponent],
  providers: [],
})
export class TwelveColumnModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TwelveColumnModule,
      providers: []
    };
  }
}
