import { useState } from "react";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { ItemCard } from "./ItemCard.tsx";
import { Gradient } from "../color/Gradient.ts";
import { SliderWithNumberField } from "./SliderWithNumberField.tsx";
import { Heading } from "@react-spectrum/s2";

export function RarityPreviewPage() {
    const [t, setT] = useState(0);
    const [tDelta, setTDelta] = useState(0.05);
    const [gradient] = useState(
        new Gradient([
            { pos: 0.10, color: { r: 198, g: 198, b: 198 } },
            { pos: 0.30, color: { r: 142, g: 219, b: 72 } },
            { pos: 0.50, color: { r: 39, g: 216, b: 255 } },
            { pos: 0.70, color: { r: 255, g: 135, b: 255 } },
            { pos: 0.90, color: { r: 253, g: 187, b: 43 } },
        ])
    );

    const tTop = Math.min(t + tDelta, 1);
    const tBottom = Math.max(t - tDelta, 0);
    const colorTop = gradient.sample(tTop);
    const colorBottom = gradient.sample(tBottom);

    return (
        <div className={style({
            display: "flex",
            flexDirection: "column",
            gap: 24,
            minHeight: "100vh",
            padding: 24
        })}>
            <Heading level={1} styles={style({
                color: "auto",
                textAlign: "center",
            })}>
                Rarity Preview
            </Heading>

            <div className={style({
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                alignItems: "start",
            })}>
                <div className={style({
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    width: 320
                })}>
                    <SliderWithNumberField
                        label="Float"
                        value={t}
                        setValue={setT}
                        minValue={0}
                        maxValue={1}
                    />

                    <SliderWithNumberField
                        label="Delta"
                        value={tDelta}
                        setValue={setTDelta}
                        minValue={0}
                        maxValue={0.3}
                    />
                </div>

                <div className={style({
                    display: "flex",
                    flex: 1,
                    justifyContent: "center"
                })}>
                    <ItemCard colorTop={colorTop} colorBottom={colorBottom}/>
                </div>
            </div>
        </div>
    );
}