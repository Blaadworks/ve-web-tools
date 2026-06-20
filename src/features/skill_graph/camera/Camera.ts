import type { Vec2 } from "../../../math/Vec2.ts";

export class Camera {
    public position: Vec2 = {x: 0, y: 0};
    public zoom: number = 1;
}