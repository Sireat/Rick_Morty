export declare function useEventHook<TParams extends any[] = any[]>(): {
    on: (fn: (...params: TParams) => void) => {
        off: () => void;
    };
    off: (fn: (...params: TParams) => void) => void;
    trigger: (...params: TParams) => void;
    getCount: () => number;
};
