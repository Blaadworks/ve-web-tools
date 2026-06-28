import * as React from "react";
import { useEffect } from "react";
import type { CanvasRenderer } from "./CanvasRenderer.ts";

export function useCanvasLoop(
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    renderer: CanvasRenderer
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