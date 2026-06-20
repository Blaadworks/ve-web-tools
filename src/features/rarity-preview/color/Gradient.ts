import type { ColorRgb } from "./ColorRgb.ts";
import { ColorHelper } from "./ColorHelper.ts";

type GradientElement = {
    pos: number;
    color: ColorRgb;
};

export class Gradient {
    private readonly colors: GradientElement[];

    constructor(colors: GradientElement[]) {
        this.colors = colors;
    }

    sample(t: number) {
        if(t <= this.colors[0].pos) {
            return this.colors[0].color;
        }

        if(t >= this.colors[this.colors.length - 1].pos) {
            return this.colors[this.colors.length - 1].color;
        }

        for(let i = 0; i < this.colors.length - 1; i++) {
            const left = this.colors[i];
            const right = this.colors[i + 1];

            if(t >= left.pos && t <= right.pos) {
                const localT = (t - left.pos) / (right.pos - left.pos);
                return ColorHelper.lerpColor(left.color, right.color, localT);
            }
        }

        return this.colors[0].color;
    }
}