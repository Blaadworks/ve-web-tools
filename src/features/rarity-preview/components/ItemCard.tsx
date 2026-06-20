import type { Color } from "../Color.ts";

type Props = {
    colorTop: Color,
    colorBottom: Color
}

export function ItemCard({ colorTop, colorBottom }: Props) {
    return (
        <div
            className="d-flex flex-column p-3 rounded text-dark gap-3"
            style={{
                width: `300px`,
                background: `linear-gradient(
                        rgb(${colorTop.r}, ${colorTop.g}, ${colorTop.b}) 0%,
                        rgb(${colorBottom.r}, ${colorBottom.g}, ${colorBottom.b}) 100%)`
            }}
        >
            <div className="d-flex justify-content-center">
                <img
                    src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png"
                    style={{
                        width: 64
                    }}
                />
            </div>
            <b className="text-center">Железный меч</b>
            <div>Самый обычный, ничем ни примечательный меч из стали.</div>
        </div>
    )
}