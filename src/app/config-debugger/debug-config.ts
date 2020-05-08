export abstract class DebugConfig {
  debugConfig?: DebugConfigType;
}

export enum DebugConfigType {
  SCREEN = 'Screen',
  CONSOLE = 'Console',
  NONE = 'None',
}