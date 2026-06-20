import { Container } from "inversify";
import { CameraStore } from "../core/features/skill_graph/camera/CameraStore.ts";
import { ZoomToolStore } from "../core/features/skill_graph/tools/ZoomToolStore.ts";
import { ZoomInCommand } from "../commands/ZoomInCommand.ts";
import { ZoomOutCommand } from "../commands/ZoomOutCommand.ts";
import { ZoomResetCommand } from "../commands/ZoomResetCommand.ts";
import { ZoomCommand } from "../commands/ZoomCommand.ts";
import { ToolRegistry } from "../core/features/skill_graph/tools/ToolRegistry.ts";
import { ZoomTool } from "../core/features/skill_graph/tools/ZoomTool.ts";
import { ToolManager } from "../core/features/skill_graph/tools/ToolManager.ts";
import { NodeTool } from "../core/features/skill_graph/tools/NodeTool.ts";
import { Graph } from "../core/features/skill_graph/graph/Graph.ts";
import { PanController } from "../input/PanController.ts";
import { InputHandler } from "../input/InputHandler.ts";
import { GraphRenderer } from "../core/features/skill_graph/GraphRenderer.ts";

export const container = new Container();

export function bootstrap() {
    registerDependencies();
    initialize();
}

function registerDependencies() {
    container.bind(CameraStore).toSelf().inSingletonScope();
    container.bind(ZoomToolStore).toSelf().inSingletonScope();
    container.bind(ToolRegistry).toSelf().inSingletonScope();
    container.bind(ToolManager).toSelf().inSingletonScope();
    container.bind(Graph).toSelf().inSingletonScope();
    container.bind(PanController).toSelf().inSingletonScope();
    container.bind(InputHandler).toSelf().inSingletonScope();
    container.bind(GraphRenderer).toSelf().inSingletonScope();

    container.bind(ZoomInCommand).toSelf().inSingletonScope();
    container.bind(ZoomOutCommand).toSelf().inSingletonScope();
    container.bind(ZoomResetCommand).toSelf().inSingletonScope();
    container.bind(ZoomCommand).toSelf().inSingletonScope();
}

function initialize() {
    const toolRegistry = container.get(ToolRegistry);
    const cameraStore = container.get(CameraStore);

    toolRegistry.register(new ZoomTool(cameraStore))
    toolRegistry.register(new NodeTool())
}