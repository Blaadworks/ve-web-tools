import { CameraStore } from "../camera/CameraStore.ts";
import { Graph } from "./Graph.ts";
import { inject, injectable } from "inversify";
import type { Store } from "../../../adapters/Store.ts";
import type { Camera } from "../camera/Camera.ts";

@injectable()
export class GraphRenderer {
    private cameraStore: Store<Camera>;
    private graph: Graph;

    constructor(
        @inject(CameraStore) cameraStore: CameraStore,
        @inject(Graph) graph: Graph,
    ) {
        this.cameraStore = cameraStore;
        this.graph = graph;
    }

    render(ctx: CanvasRenderingContext2D) {
        const camera = this.cameraStore.get();
        const canvas = ctx.canvas;

        ctx.resetTransform();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.setTransform(
            camera.zoom, 0,
            0, camera.zoom,
            canvas.width / 2 - camera.position.x * camera.zoom,
            canvas.height / 2 - camera.position.y * camera.zoom
        );

        ctx.fillStyle = "white";

        for (const node of this.graph.getNodes()) {
            ctx.fillRect(node.position.x, node.position.y, 50, 50);
        }
    }
}