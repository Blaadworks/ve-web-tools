import type { NodeId } from "./Node.ts";

export type EdgeId = number;

export class Edge {
    readonly id: EdgeId;
    readonly firstNodeId: NodeId;
    readonly secondNodeId: NodeId;

    constructor(id: EdgeId, firstNodeId: NodeId, secondNodeId: NodeId) {
        this.id = id;
        this.firstNodeId = firstNodeId;
        this.secondNodeId = secondNodeId;
    }
}