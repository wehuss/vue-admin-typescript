declare namespace Vuex {
    export interface App {
        sidebar: {
            opened: boolean;
            withoutAnimation: boolean;
        };
        device: string;
    }

    // export interface App {
    //     state: AppState;
    //     mutations: {
    //         TOGGLE_SIDEBAR: (state: AppState) => void;
    //         CLOSE_SIDEBAR: (state: Vuex.AppState, withoutAnimation: boolean) => void;
    //         TOGGLE_DEVICE: (state: Vuex.AppState, device: string) => void;
    //     };
    //     actions: {
    //         toggleSideBar: ({ commit }: { commit: Commit }) => void;
    //         closeSideBar: ({ commit }: { commit: Commit }, { withoutAnimation }: { withoutAnimation: boolean }) => void;
    //         toggleDevice: ({ commit }: { commit: Commit }, device: string) => void;
    //     }
    // }

    export interface Store {
        app: App;
    }
}
