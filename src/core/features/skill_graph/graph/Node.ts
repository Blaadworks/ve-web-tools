import type { Vec2 } from "../../../math/Vec2.ts";

export type NodeId = number;

export class Node {
    readonly id: NodeId;
    position: Vec2;

    constructor(id: NodeId, position: Vec2) {
        this.id = id;
        this.position = position;
    }
}