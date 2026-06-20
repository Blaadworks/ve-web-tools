import "../../../../../styles/Sidebar.css"
import { container } from "../../../../bootstrap/compositionRoot.ts";
import { CameraStore } from "../../skill_graph/camera/CameraStore.ts";
import { useStore } from "../../../../react_ui/useStore.ts";
import { ZoomInCommand } from "../../../../commands/ZoomInCommand.ts";
import { ZoomOutCommand } from "../../../../commands/ZoomOutCommand.ts";
import { ZoomResetCommand } from "../../../../commands/ZoomResetCommand.ts";
import { ToolManager } from "../../skill_graph/tools/ToolManager.ts";

export function SidebarView() {
    const cameraStore = container.get(CameraStore);
    const camera = useStore(cameraStore)
    const zoomInCommand = container.get(ZoomInCommand);
    const zoomOutCommand = container.get(ZoomOutCommand);
    const resetZoomCommand = container.get(ZoomResetCommand);
    const toolManager = container.get(ToolManager);

    return <div className="sidebar">
        <div className="zoomHud">
            Zoom: {(camera.zoom * 100).toFixed(0)}%
        </div>
        <div className="toolbar">
            <button onClick={() => zoomInCommand.execute()}>Zoom +</button>
            <button onClick={() => zoomOutCommand.execute()}>Zoom -</button>
            <button onClick={() => resetZoomCommand.execute()}>Reset</button>
            <button onClick={() => toolManager.selectTool("zoom")}>Zoom</button>
            <button onClick={() => toolManager.selectTool("node")}>Node</button>
        </div>
    </div>
}