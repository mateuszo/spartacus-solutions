

import { Component, OnInit } from '@angular/core';
import { DebugConfig, DebugConfigType } from './debug-config';
@Component({
  selector: 'app-config-debugger',
  templateUrl: './config-debugger.component.html',
  styleUrls: ['./config-debugger.component.scss']
})
export class ConfigDebuggerComponent implements OnInit {

  constructor(public debugConfig: DebugConfig) {
    if (debugConfig.debugConfig === DebugConfigType.CONSOLE) {
      console.log(debugConfig);
    }
  }

  ngOnInit(): void {
  }
}
