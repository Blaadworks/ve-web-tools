import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Button, Heading } from "@react-spectrum/s2";
import { useRef, useState } from "react";
import { useCanvasLoop } from "../../base/render/useCanvasLoop.tsx";
import { DungeonGridRenderer } from "../render/DungeonGridRenderer.ts";
import { DungeonGenerator } from "../generator/DungeonGenerator.ts";
import { DungeonGeneratorConfig } from "../generator/DungeonGeneratorConfig.ts";
import { RandomGenerator } from "../../../math/RandomGenerator.ts";

export function DungeonGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const seed = 42;
    const rng = new RandomGenerator(seed);
    const config = new DungeonGeneratorConfig();
    config.roomCount = 10;
    config.minRoomSize = 3;
    config.maxRoomSize = 6;
    config.minRoomDistance = 2;
    config.maxRoomDistance = 5;

    const dungeonGenerator = new DungeonGenerator(config, rng);
    const dungeon = dungeonGenerator.generate();
    const [renderer] = useState(new DungeonGridRenderer(dungeon));

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