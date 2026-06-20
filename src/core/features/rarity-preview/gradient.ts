import { lerp } from "../../math/math_functions.ts";
import type { Color } from "./Color.ts";

type GradientElement = {
    pos: number;
    color: Color
};

const gradient: GradientElement[] = [
    { pos: 0.10, color: { r: 198, g: 198, b: 198 } },
    { pos: 0.30, color: { r: 142, g: 219, b: 72 } },
    { pos: 0.50, color: { r: 39, g: 216, b: 255 } },
    { pos: 0.70, color: { r: 255, g: 135, b: 255 } },
    { pos: 0.90, color: { r: 253, g: 187, b: 43 } },
];

export function sampleGradient(t: number): Color {
    if(t <= gradient[0].pos) {
        return gradient[0].color;
    }

    if(t >= gradient[gradient.length - 1].pos) {
        return gradient[gradient.length - 1].color;
    }

    for(let i = 0; i < gradient.length - 1; i++) {
        const left = gradient[i];
        const right = gradient[i + 1];

        if(t >= left.pos && t <= right.pos) {
            const localT = (t - left.pos) / (right.pos - left.pos);

            return {
                r: Math.round(lerp(left.color.r, right.color.r, localT)),
                g: Math.round(lerp(left.color.g, right.color.g, localT)),
                b: Math.round(lerp(left.color.b, right.color.b, localT)),
            };
        }
    }

    return gradient[0].color;
}