type Props = {
    label: string;
    value: number;
    setValue: (newValue: number) => void;
    minValue: number
    maxValue: number
}

export function BaseSlider({ label, value, setValue, minValue, maxValue }: Props) {
    return (
        <div className="d-flex gap-2 flex-row align-items-center">
            <p className="mb-0">{label}</p>
            <input
                className="form-range"
                type="range"
                min={minValue}
                max={maxValue}
                step={(maxValue - minValue) / 100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />
            <input
                className="form-control"
                style={{
                    width: `100px`,
                    height: `30px`
                }}
                type="number"
                min={minValue}
                max={maxValue}
                step={(maxValue - minValue) / 10}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />
        </div>
    )
}