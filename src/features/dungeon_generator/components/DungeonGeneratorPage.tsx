import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Heading } from "@react-spectrum/s2";

export function DungeonGeneratorPage() {
    return (
        <div className={style({
            display: "flex",
            flexDirection: "column",
            height: "screen",
            width: "screen",
            padding: 24,
        })}>
            <Heading level={1} styles={style({
                color: "auto",
                textAlign: "center",
            })}>
                Dungeon Generator
            </Heading>
        </div>
    )
}