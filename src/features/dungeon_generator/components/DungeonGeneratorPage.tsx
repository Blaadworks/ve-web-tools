import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Button, Heading } from "@react-spectrum/s2";
import { useRef } from "react";
import { useCanvasLoop } from "../../base/render/useCanvasLoop.tsx";
import { DungeonRenderer } from "../dungeon/DungeonRenderer.ts";
import { container } from "../../../bootstrap/compositionRoot.ts";
import { GenerateDungeonCommand } from "../dungeon/GenerateDungeonCommand.ts";

export function DungeonGeneratorPage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const dungeonRenderer = container.get(DungeonRenderer);
    const generateDungeonCommand = container.get(GenerateDungeonCommand);

    useCanvasLoop(canvasRef, dungeonRenderer);

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
            <Button onPress={() => generateDungeonCommand.execute()} styles={style({
                alignSelf: "center",
            })}
            >
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
