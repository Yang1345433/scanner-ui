import {defineStore} from "pinia";
import {UserState} from "@/stores/interface/UserState.ts";
import {store} from "@/stores";

export const userStore = defineStore({
    id: 'scanner-user',
    state: (): UserState => ({
        token: '',
        username: '',
        authority: ''
    }),
    getters: {},
    actions: {
        setToken(token: string) {
            this.token = token
        },
        removeToken() {
            this.token = ''
        },
        setAuthority(authority: string) {
            this.authority = authority
        }
    },
})

export function userStoreHook() {
    return userStore(store)
}