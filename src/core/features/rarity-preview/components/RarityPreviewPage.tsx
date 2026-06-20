import { sampleGradient } from "../gradient.ts";
import { useState } from "react";
import { ItemCard } from "./ItemCard.tsx";
import { BaseSlider } from "./BaseSlider.tsx";

export function RarityPreviewPage() {
    const [t, setT] = useState(0);
    const [tDelta, setTDelta] = useState(0.05);

    const tTop = Math.min(t + tDelta, 1);
    const tBottom = Math.max(t - tDelta, 0);

    const colorTop = sampleGradient(tTop);
    const colorBottom = sampleGradient(tBottom);

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