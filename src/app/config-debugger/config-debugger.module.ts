import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, Config } from '@spartacus/core';
import { DebugConfig, DebugConfigType } from './debug-config';
import { ConfigDebuggerComponent } from './config-debugger.component';



@NgModule({
  declarations: [ConfigDebuggerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      debugConfig: DebugConfigType.SCREEN
    } as DebugConfig)
  ],
  providers: [
    { provide: DebugConfig, useExisting: Config }
  ],
  exports: [ConfigDebuggerComponent]
})
export class ConfigDebuggerModule { }
