import { Container } from "inversify";
import { CameraStore } from "../features/skill_graph/camera/CameraStore.ts";
import { ZoomToolStore } from "../features/skill_graph/tools/ZoomToolStore.ts";
import { ZoomInCommand } from "../features/skill_graph/commands/ZoomInCommand.ts";
import { ZoomOutCommand } from "../features/skill_graph/commands/ZoomOutCommand.ts";
import { ZoomResetCommand } from "../features/skill_graph/commands/ZoomResetCommand.ts";
import { ZoomCommand } from "../features/skill_graph/commands/ZoomCommand.ts";
import { ToolRegistry } from "../features/skill_graph/tools/ToolRegistry.ts";
import { ZoomTool } from "../features/skill_graph/tools/ZoomTool.ts";
import { ToolManager } from "../features/skill_graph/tools/ToolManager.ts";
import { NodeTool } from "../features/skill_graph/tools/NodeTool.ts";
import { Graph } from "../features/skill_graph/graph/Graph.ts";
import { PanController } from "../features/skill_graph/input/PanController.ts";
import { GraphViewInputHandler } from "../features/skill_graph/input/GraphViewInputHandler.ts";
import { GraphRenderer } from "../features/skill_graph/graph/GraphRenderer.ts";
import { DungeonViewModel } from "../features/dungeon_generator/dungeon/DungeonViewModel.ts";
import { DungeonRenderer } from "../features/dungeon_generator/dungeon/DungeonRenderer.ts";
import { DungeonStore } from "../features/dungeon_generator/dungeon/DungeonStore.ts";
import { DungeonGeneratorConfig } from "../features/dungeon_generator/dungeon/DungeonGeneratorConfig.ts";
import { DungeonGenerator } from "../features/dungeon_generator/dungeon/DungeonGenerator.ts";
import { RandomGenerator } from "../math/RandomGenerator.ts";
import { GenerateDungeonCommand } from "../features/dungeon_generator/commands/GenerateDungeonCommand.ts";

export const container = new Container();

export function bootstrap() {
    registerDependencies();
    initialize();
}

function registerDependencies() {
    // Skill Graph
    container.bind(CameraStore).toSelf().inSingletonScope();
    container.bind(PanController).toSelf().inSingletonScope();
    container.bind(ToolRegistry).toSelf().inSingletonScope();
    container.bind(ToolManager).toSelf().inSingletonScope();
    container.bind(ZoomToolStore).toSelf().inSingletonScope();
    container.bind(ZoomCommand).toSelf().inSingletonScope();
    container.bind(ZoomInCommand).toSelf().inSingletonScope();
    container.bind(ZoomOutCommand).toSelf().inSingletonScope();
    container.bind(ZoomResetCommand).toSelf().inSingletonScope();
    container.bind(GraphViewInputHandler).toSelf().inSingletonScope();
    container.bind(Graph).toSelf().inSingletonScope();
    container.bind(GraphRenderer).toSelf().inSingletonScope();

    // Dungeon
    container.bind(DungeonViewModel).toSelf().inSingletonScope();
    container.bind(DungeonRenderer).toSelf().inSingletonScope();
    container.bind(DungeonStore).toSelf().inSingletonScope();
    container.bind(DungeonGeneratorConfig).toSelf().inSingletonScope();
    container.bind(DungeonGenerator).toSelf().inSingletonScope();
    container.bind(RandomGenerator).toConstantValue(new RandomGenerator(42))
    container.bind(GenerateDungeonCommand).toSelf();
}

function initialize() {
    const toolRegistry = container.get(ToolRegistry);
    const cameraStore = container.get(CameraStore);

    toolRegistry.register(new ZoomTool(cameraStore))
    toolRegistry.register(new NodeTool())


}