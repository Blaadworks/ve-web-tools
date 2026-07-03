import type { Vec2 } from "../../../math/Vec2.ts";

export class TileViewModel {
    readonly pos: Vec2;

    constructor(pos: Vec2) {
        this.pos = pos;
    }
}
