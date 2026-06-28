import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Button, Heading } from "@react-spectrum/s2";
import { useRef, useState } from "react";
import { useCanvasLoop } from "../../base/render/useCanvasLoop.tsx";
import { DungeonGeneratorRenderer } from "../render/DungeonGeneratorRenderer.ts";
import type { Grid } from "../render/Grid.ts";

export function DungeonGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const grid: Grid = {
        tiles: [
            { pos: { x: 0, y: 0 }, color: "white" },
            { pos: { x: 1, y: 0 }, color: "white" },
            { pos: { x: 2, y: 0 }, color: "white" },
        ]
    };
    const [renderer] = useState(new DungeonGeneratorRenderer(grid));

    useCanvasLoop(canvasRef, renderer);

    return (
        <div className={style({
            display: "flex",
            flexDirection: "column",
            height: "screen",
            width: "screen",
            gap: 24,
            padding: 24,
            boxSizing: "border-box",
        })}>
            <Heading level={1} styles={style({
                color: "auto",
                textAlign: "center",
            })}>
                Dungeon Generator
            </Heading>
            <Button styles={style({
                alignSelf: "center",
            })}>
                Generate
            </Button>
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
}