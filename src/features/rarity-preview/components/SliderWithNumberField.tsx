import { NumberField, Slider } from "@react-spectrum/s2";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };

type Props = {
    label: string;
    value: number;
    setValue: (newValue: number) => void;
    minValue: number;
    maxValue: number;
};

export function SliderWithNumberField({ label, value, setValue, minValue, maxValue }: Props) {
    return (
        <div className={style({
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            gap: 32,
            width: "100%",
        })}>
            <Slider
                minValue={minValue}
                maxValue={maxValue}
                step={0.01}
                value={value}
                onChange={setValue}
                trackStyle="thick"
                thumbStyle="precise"
                label={label}
            />
            <NumberField
                minValue={minValue}
                maxValue={maxValue}
                step={0.01}
                value={value}
                onChange={setValue}
                styles={style({
                    maxWidth: 100,
                    flexShrink: 0,
                })}
            />
        </div>

    );
}