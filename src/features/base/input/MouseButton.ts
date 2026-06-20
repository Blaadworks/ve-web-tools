export const MouseButton = {
    Left: 0,
    Middle: 1,
    Right: 2,
} as const;

export type MouseButton = typeof MouseButton[keyof typeof MouseButton];