import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {components} from './components';
import {pipes} from './pipes';


@NgModule({
  declarations: [
    ...pipes,
    ...components,
  ],
  exports: [
    ...pipes,
    ...components,
    CommonModule,
  ],
  imports: [
    CommonModule
  ]
})
export class CommonAppModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonAppModule,
    };
  }
}
