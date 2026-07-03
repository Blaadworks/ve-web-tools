import type { Vec2 } from "../../../math/Vec2.ts";

export class Room {
    readonly pos: Vec2
    readonly size: Vec2

    constructor(pos: Vec2, size: Vec2) {
        this.pos = pos;
        this.size = size;
    }

    getMinX(): number {
        return this.pos.x;
    }

    getMaxX(): number {
        return this.pos.x + this.size.x;
    }

    getMinY(): number {
        return this.pos.y - this.size.y;
    }

    getMaxY(): number {
        return this.pos.y
    }
}
