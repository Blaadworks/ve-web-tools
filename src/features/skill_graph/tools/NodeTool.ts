import type { Tool } from "./Tool.ts";
import type { ToolId } from "./ToolId.ts";
import { container } from "../../../bootstrap/compositionRoot.ts";
import { Graph } from "../graph/Graph.ts";
import type { Vec2 } from "../../../math/Vec2.ts";
import type { NodeId } from "../graph/Node.ts";

export class NodeTool implements Tool {
    readonly id: ToolId = "node";
    private draggingNodeId: NodeId | null = null;
    private offset: Vec2 = { x: 0, y: 0 };

    onStartUsing(position: Vec2) {
        const graph = container.get(Graph);

        const node = graph.getNodes().find(node => {
            return (
                position.x >= node.position.x &&
                position.x <= node.position.x + 50 &&
                position.y >= node.position.y &&
                position.y <= node.position.y + 50
            );
        });

        if(node !== undefined) {
            this.draggingNodeId = node.id;

            this.offset = {
                x: position.x - node.position.x,
                y: position.y - node.position.y,
            };

            return;
        }

        graph.addNode(position);
    }

    onMove(position: Vec2) {
        if(this.draggingNodeId === undefined) {
            return;
        }

        const graph = container.get(Graph);
        const node = graph.getNode(this.draggingNodeId!);

        if(node === undefined) {
            return;
        }

        node.position = {
            x: position.x - this.offset.x,
            y: position.y - this.offset.y,
        };
    }

    onFinishUsing() {
        this.draggingNodeId = null;
    }
}