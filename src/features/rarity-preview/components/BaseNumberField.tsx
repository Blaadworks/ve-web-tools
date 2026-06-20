type Props = {
    value: number | string;
    setValue: (newValue: number) => void;
    minValue: number
    maxValue: number
}

export function BaseNumberField({ value, setValue, minValue, maxValue }: Props) {
    return (
        <div className="d-flex gap-2 flex-row align-items-center">
            <input
                className="form-control p-2"
                style={{
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