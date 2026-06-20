import { clamp } from "../../../math/math_functions.ts";
import type { Store } from "../../../adapters/Store.ts";
import type { Camera } from "../camera/Camera.ts";

import type { Tool } from "./Tool.ts";
import type { ToolId } from "./ToolId.ts";

const MIN_ZOOM: number = 0.6;
const MAX_ZOOM: number = 3;
const ZOOM_STEP: number = 0.2;

export class ZoomTool implements Tool {
    readonly id: ToolId = "zoom";
    private readonly cameraStore: Store<Camera>;

    constructor(cameraStore: Store<Camera>) {
        this.cameraStore = cameraStore;
    }

    onStartUsing(): void {
        this.zoomIn();
    }

    onMove(): void {

    }

    onFinishUsing(): void {

    }

    zoomIn() {
        this.zoom(-ZOOM_STEP)
    }

    zoomOut() {
        this.zoom(ZOOM_STEP)
    }

    resetZoom() {
        this.cameraStore.update({
            zoom: 1
        });
    }

    zoom(amount: number) {
        const step = clamp(amount, -ZOOM_STEP, ZOOM_STEP);
        const currentZoom = this.cameraStore.get().zoom;
        const finalZoom = clamp(currentZoom - step, MIN_ZOOM, MAX_ZOOM);

        this.cameraStore.update({
            zoom: finalZoom
        });
    }
}