import type { Camera } from "../features/skill_graph/camera/Camera.ts";
import type { Vec2 } from "./Vec2.ts";

export class Coordinates {
    static screenToWorld(screenPos: Vec2, camera: Camera, canvas: HTMLCanvasElement): Vec2 {
        return {
            x: (screenPos.x - canvas.width / 2) / camera.zoom + camera.position.x,
            y: (screenPos.y - canvas.height / 2) / camera.zoom + camera.position.y
        };
    }

    static worldToScreen(worldPos: Vec2, camera: Camera): Vec2 {
        return {
            x: worldPos.x * camera.zoom + camera.position.x,
            y: worldPos.y * camera.zoom + camera.position.y
        };
    }
}