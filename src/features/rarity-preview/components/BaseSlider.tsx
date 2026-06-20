type Props = {
    value: number | string;
    setValue: (newValue: number) => void;
    minValue: number
    maxValue: number
}

export function BaseSlider({ value, setValue, minValue, maxValue }: Props) {
    return (
        <input
            className="form-range"
            type="range"
            min={minValue}
            max={maxValue}
            step={(maxValue - minValue) / 100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
        />
    )
}