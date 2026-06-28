import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Button, Heading } from "@react-spectrum/s2";
import { useRef, useState } from "react";
import { useCanvasLoop } from "../../base/render/useCanvasLoop.tsx";
import { DungeonGeneratorRenderer } from "../render/DungeonGeneratorRenderer.ts";
import { DungeonGrid } from "../render/DungeonGrid.ts";
import { Room } from "../rooms/Room.ts";

export function DungeonGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const grid = new DungeonGrid();
    const room = new Room({ x: 0, y: 0 }, { x: 4, y: 6 });
    const [renderer] = useState(new DungeonGeneratorRenderer(grid));

    grid.addRoom(room)
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