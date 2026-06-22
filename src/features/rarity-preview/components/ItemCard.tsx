import type { ColorRgb } from "../color/ColorRgb.ts";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };
import { Text } from "@react-spectrum/s2";

type Props = {
    colorTop: ColorRgb;
    colorBottom: ColorRgb;
};

export function ItemCard({ colorTop, colorBottom }: Props) {
    const backgroundGradient = `linear-gradient(
        rgb(${colorTop.r}, ${colorTop.g}, ${colorTop.b}),
        rgb(${colorBottom.r}, ${colorBottom.g}, ${colorBottom.b})
    )`;

    return (
        <div className={style({
            width: 300,
            height: 200,
            display: "flex",
            flexDirection: "column",
            borderRadius: "default",
        })} style={{
            backgroundImage: backgroundGradient,
        }}>
            <div className={style({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 36,
            })}>
                <Text styles={style({
                    font: "title",
                })}>
                    Железный меч
                </Text>
            </div>

            <div className={style({
                flex: 1,
                height: "100%",
                borderRadius: "default",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7))`,
                margin: 4,
            })}>
                <div className={style({
                    padding: 16,
                    flexDirection: "column",
                })}>
                    <img
                        src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png"
                        alt="Железный меч"
                        className={style({
                            width: 48,
                            alignSelf: "center",
                        })}
                    />

                    <Text styles={style({
                        font: "body",
                    })}>
                        Обычный, ничем ни примечательный меч из стали.
                    </Text>
                </div>
            </div>
        </div>
    );
}