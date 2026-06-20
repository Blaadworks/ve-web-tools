import { GraphView } from "./GraphView.tsx";
import { SidebarView } from "../../base/components/SidebarView.tsx";

export function SkillGraphPage() {
    return (
        <div className="app">
            <GraphView/>
            <SidebarView/>
        </div>
    )
}