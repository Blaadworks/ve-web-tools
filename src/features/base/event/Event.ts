export class Event<T> {
    private listeners: ((arg: T) => void)[] = [];

    subscribe(listener: (arg: T) => void) {
        this.listeners.push(listener);
    }

    unsubscribe(listener: (arg: T) => void) {
        this.listeners = this.listeners.filter(it => it !== listener);
    }

    emit(arg: T) {
        for(const listener of this.listeners) {
            listener(arg);
        }
    }
}
