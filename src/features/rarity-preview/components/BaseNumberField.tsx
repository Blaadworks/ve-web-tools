type Props = {
    value: number | string;
    setValue: (newValue: number) => void;
    minValue: number
    maxValue: number
}

export function BaseNumberField({ value, setValue, minValue, maxValue }: Props) {
    return (
        <input
            className="form-control p-2 text-center"
            style={{
                maxHeight: `30px`
            }}
            type="number"
            min={minValue}
            max={maxValue}
            step={(maxValue - minValue) / 10}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
        />
    )
}