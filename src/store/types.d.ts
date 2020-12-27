declare namespace Vuex {
    export interface App {
        sidebar: {
            opened: boolean;
            withoutAnimation: boolean;
        };
        device: string;
    }

    export interface Vuex {
        app: App;
    }
}
