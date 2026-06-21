import type { ColorRgb } from "../color/ColorRgb.ts";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Text } from "@react-spectrum/s2";

type Props = {
    colorTop: ColorRgb;
    colorBottom: ColorRgb;
};

export function ItemCard({ colorTop, colorBottom }: Props) {
    const backgroundGradient = `linear-gradient(180deg, 
        rgb(${colorTop.r} ${colorTop.g} ${colorTop.b}) 0%,
        rgb(${colorBottom.r} ${colorBottom.g} ${colorBottom.b}) 100%
    )`;

    return (
        <div
            className={style({
                width: 300,
                height: 200,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: 16,
                borderRadius: "default",
            })}
            style={{ backgroundImage: backgroundGradient }}
        >
            <img
                src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png"
                alt="Железный меч"
                className={style({
                    width: 64,
                    alignSelf: "center",
                })}
            />
            <Text styles={style({
                font: "title",
                textAlign: "center",
            })}>
                Железный меч
            </Text>
            <Text styles={style({
                font: "body",
            })}>
                Обычный, ничем не примечательный меч из стали.
            </Text>
        </div>
    );
}