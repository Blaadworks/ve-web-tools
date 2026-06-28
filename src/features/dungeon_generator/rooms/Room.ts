import type { Vec2 } from "../../../math/Vec2.ts";

export class Room {
    readonly pos: Vec2
    readonly size: Vec2

    constructor(pos: Vec2, size: Vec2) {
        this.pos = pos;
        this.size = size;
    }
}