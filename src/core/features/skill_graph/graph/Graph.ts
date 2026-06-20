import type { Vec2 } from "../../../math/Vec2.ts";
import { Node, type NodeId } from "./Node.ts";
import { Edge, type EdgeId } from "./Edge.ts";

export class Graph {
    private nodes: Map<NodeId, Node> = new Map<NodeId, Node>();
    private edges: Map<EdgeId, Edge> = new Map<EdgeId, Edge>();
    private adjacencyMap: Map<NodeId, Set<NodeId>> = new Map<NodeId, Set<NodeId>>();
    private nodeIdCounter: NodeId = 0;
    private edgeIdCounter: EdgeId = 0;

    addNode(position: Vec2): Node {
        const node = new Node(this.nodeIdCounter++, position);
        this.nodes.set(node.id, node);
        this.adjacencyMap.set(node.id, new Set());

        return node;
    }

    addEdge(firstNodeId: NodeId, secondNodeId: NodeId): Edge {
        const edge = new Edge(this.edgeIdCounter++, firstNodeId, secondNodeId);
        const firstNodeNeighbours = this.adjacencyMap.get(firstNodeId);
        const secondNodeNeighbours = this.adjacencyMap.get(secondNodeId);

        if(firstNodeNeighbours === undefined || secondNodeNeighbours === undefined) {
            throw new Error(`Tried to create an edge, but not all of the nodes were in the graph!`);
        }

        this.edges.set(edge.id, edge)
        firstNodeNeighbours.add(secondNodeId);
        secondNodeNeighbours.add(firstNodeId);

        return edge;
    }

    getNode(id: NodeId): Node | undefined {
        return this.nodes.get(id);
    }

    getNodes(): Node[] {
        return Array.from(this.nodes.values());
    }

    getEdges(): Edge[] {
        return Array.from(this.edges.values());
    }
}