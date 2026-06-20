type Props = {
    value: number | string;
    setValue: (newValue: number) => void;
    minValue: number
    maxValue: number
}

export function BaseSlider({ value, setValue, minValue, maxValue }: Props) {
    return (
        <div className="d-flex gap-2 flex-row align-items-center">
            <input
                className="form-range"
                type="range"
                min={minValue}
                max={maxValue}
                step={(maxValue - minValue) / 100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />
        </div>
    )
}