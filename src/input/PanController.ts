import { Store } from "../core/adapters/Store.ts";
import type { Camera } from "../core/features/skill_graph/camera/Camera.ts";
import { inject } from "inversify";
import { CameraStore } from "../core/features/skill_graph/camera/CameraStore.ts";
import * as React from "react";

export class PanController {
    private isDragging = false;
    private last = { x: 0, y: 0 };
    private cameraStore: Store<Camera>

    constructor(@inject(CameraStore) cameraStore: CameraStore) {
        this.cameraStore = cameraStore;
    }

    onMouseDown(e: React.MouseEvent) {
        this.isDragging = true;
        this.last = { x: e.clientX, y: e.clientY };
    }

    onMouseMove(e: React.MouseEvent) {
        if(!this.isDragging) {
            return;
        }

        const camera = this.cameraStore.get();
        const dx = e.clientX - this.last.x;
        const dy = e.clientY - this.last.y;

        this.last = { x: e.clientX, y: e.clientY };
        this.cameraStore.set(prev => ({
            ...prev,
            position: {
                x: prev.position.x - dx / camera.zoom,
                y: prev.position.y - dy / camera.zoom,
            },
        }));
    }

    onMouseUp() {
        this.isDragging = false;
    }
}