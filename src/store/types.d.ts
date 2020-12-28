declare namespace Vuex {
    export interface App {
        sidebar: {
            opened: boolean;
            withoutAnimation: boolean;
        };
        device: string;
    }

    export interface Settings {
        fixedHeader:boolean;
        sidebarLogo:boolean;
    }

    export interface Vuex {
        app: App;
        settings:Settings
    }
}
