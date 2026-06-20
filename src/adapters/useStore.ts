import { Store } from "./Store.ts";
import { useSyncExternalStore } from "react";

export function useStore<T>(store: Store<T>) {
    return useSyncExternalStore(
        (cb) => store.subscribe(cb),
        () => store.get()
    );
}