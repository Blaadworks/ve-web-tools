import type { ToolId } from "./ToolId.ts";
import type { Vec2 } from "../../../math/Vec2.ts";

export interface Tool {
    readonly id: ToolId

    onStartUsing(position: Vec2): void;
    onMove(position: Vec2): void;
    onFinishUsing(): void;
}