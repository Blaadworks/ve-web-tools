import type { ColorRgb } from "./ColorRgb.ts";
import { ColorSpace } from "./ColorSpace.ts";
import { lerp } from "../../math/math_functions.ts";

export class ColorHelper {
    static lerpColor(startColorRgb: ColorRgb, endColorRgb: ColorRgb, t: number): ColorRgb {
        const startColorOklab = ColorSpace.rgbToOklab(startColorRgb);
        const endColorOklab = ColorSpace.rgbToOklab(endColorRgb);

        return ColorSpace.oklabToRgb({
            L: lerp(startColorOklab.L, endColorOklab.L, t),
            a: lerp(startColorOklab.a, endColorOklab.a, t),
            b: lerp(startColorOklab.b, endColorOklab.b, t),
        });
    }
}