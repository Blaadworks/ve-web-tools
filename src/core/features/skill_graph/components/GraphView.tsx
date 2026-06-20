import { useEffect, useRef } from "react";
import { container } from "../../../../bootstrap/compositionRoot.ts";
import { InputHandler } from "../../../../input/InputHandler.ts";
import { GraphRenderer } from "../GraphRenderer.ts";
import * as React from "react";

export function GraphView() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const inputHandler = container.get(InputHandler);
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
                width: "100vw",
                height: "100vh",
                background: "#121212",
            }}
        />
    );
}

function useCanvasLoop(
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    renderer: GraphRenderer
) {
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if(!canvas || !ctx) {
            return;
        }

        let running = true;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
        };

        const loop = () => {
            if(!running) {
                return;
            }

            renderer.render(ctx);
            requestAnimationFrame(loop);
        };

        resize();
        window.addEventListener("resize", resize);
        loop();

        return () => {
            running = false;
            window.removeEventListener("resize", resize);
        };
    }, [canvasRef, renderer]);
}