import { useState } from "react";
import { ItemCard } from "./ItemCard.tsx";
import { BaseSlider } from "./BaseSlider.tsx";
import { Gradient } from "../Gradient.ts";

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
        <div className="container-fluid min-vh-100 d-flex flex-column p-4">
            <h1 className="text-center mb-4">Rarity Preview</h1>
            <div className="d-flex row">
                <div className="col-3">
                    <BaseSlider
                        label="Float"
                        value={t}
                        setValue={setT}
                        minValue={0}
                        maxValue={1}
                    />
                    <BaseSlider
                        label="Delta"
                        value={tDelta}
                        setValue={setTDelta}
                        minValue={0}
                        maxValue={0.3}
                    />
                </div>
                <div className="d-flex col">
                    <ItemCard colorTop={colorTop} colorBottom={colorBottom}/>
                </div>
            </div>
        </div>
    );
}