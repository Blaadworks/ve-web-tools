import { useRef } from "react";
import { container } from "../../../bootstrap/compositionRoot.ts";
import { GraphViewInputHandler } from "../input/GraphViewInputHandler.ts";
import { GraphRenderer } from "../graph/GraphRenderer.ts";
import { useCanvasLoop } from "../../base/render/useCanvasLoop.tsx";

export function GraphView() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const inputHandler = container.get(GraphViewInputHandler);
    const renderer = container.get(GraphRenderer);

    useCanvasLoop(canvasRef, renderer);

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={inputHandler.onMouseDown}
            onMouseUp={inputHandler.onMouseUp}
            onMouseMove={inputHandler.onMouseMove}
            onWheel={inputHandler.onWheel}
            style={{
                width: "100%",
                height: "100%",
                background: "#121212",
            }}
        />
    );
}