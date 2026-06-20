import { BaseSlider } from "./BaseSlider.tsx";
import { BaseNumberField } from "./BaseNumberField.tsx";

type Props = {
    label: string;
    value: number | string;
    setValue: (newValue: number) => void;
    minValue: number;
    maxValue: number;
};

export function SliderWithNumberField({ label, value, setValue, minValue, maxValue }: Props) {
    return (
        <div className="row justify-content-center g-2 mb-3">
            <div className="col-2">
                <label className="form-label mb-0">{label}</label>
            </div>

            <div className="col">
                <BaseSlider
                    value={value}
                    setValue={setValue}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>

            <div className="col-3 col-sm-2 col-md-3">
                <BaseNumberField
                    value={value}
                    setValue={setValue}
                    minValue={minValue}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
}