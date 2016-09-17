import { NgModule, ModuleWithProviders } from '@angular/core';

import { GridModule }   from './../grid';
import { TwelveColumnModule }   from './../twelve-column';

const LAYOUT_MODULES = [
  GridModule,
  TwelveColumnModule
];

/**
 * @param  {[GridModule.forRoot(} {imports
 */
@NgModule({
  imports: [
    GridModule.forRoot(),
    TwelveColumnModule.forRoot()
  ],
  exports: [LAYOUT_MODULES],
  // This module with export layouts and any necessary providers
  providers: []
})
export class LayoutRootModule { }


/**
 * @param  {[LAYOUT_MODULES]} {imports
 * @param  {[LAYOUT_MODULES]}} exports
 */
@NgModule({
  imports: [LAYOUT_MODULES],
  exports: [LAYOUT_MODULES]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: LayoutRootModule};
  }
}
