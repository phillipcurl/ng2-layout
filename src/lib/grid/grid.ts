import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';

@NgModule({
  imports: [CommonModule],
  exports: [GridComponent],
  declarations: [GridComponent],
  providers: [],
})
export class GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GridModule,
      providers: []
    };
  }
}
