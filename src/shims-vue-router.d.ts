import Route from 'vue-router'

declare module 'vue-router' {

  export interface _RouteRecordBase {
    hidden?: boolean;
    noShowingChildren?:boolean;
  }
}
