import { injectable } from "inversify";

type Listener<T> = (state: T) => void;

@injectable()
export class Store<T> {
    private state: T;
    private listeners = new Set<Listener<T>>();

    constructor(initialState: T) {
        this.state = initialState;
    }

    get(): T {
        return this.state;
    }

    set(next: T | ((prev: T) => T)) {
        const newState =
            typeof next === "function"
                ? (next as (prev: T) => T)(this.state)
                : next;

        this.state = newState;
        this.emit();
    }

    update(partial: Partial<T>) {
        this.state = {
            ...this.state,
            ...partial,
        };

        this.emit();
    }

    subscribe(listener: Listener<T>) {
        this.listeners.add(listener);
        listener(this.state);

        return () => this.listeners.delete(listener);
    }

    private emit() {
        for(const listener of this.listeners) {
            listener(this.state);
        }
    }
}