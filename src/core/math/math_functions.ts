export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

export function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}