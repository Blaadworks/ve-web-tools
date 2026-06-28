import { GraphView } from "./GraphView.tsx";
import { SidebarView } from "../../base/components/SidebarView.tsx";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };

export function SkillGraphPage() {
    return (
        <div className={style({
            height: "screen",
            width: "screen",
            padding: 24,
            boxSizing: "border-box",
        })}>
            <GraphView/>
            <SidebarView/>
        </div>
    )
}