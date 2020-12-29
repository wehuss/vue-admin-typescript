import { _RouteRecordBase } from 'vue-router'

declare module 'vue-router' {

  export interface _RouteRecordBase {
    hidden?: boolean;
    noShowingChildren?:boolean
  }
}
