import type { Tool } from "./Tool.ts";
import { ToolRegistry } from "./ToolRegistry.ts";
import type { ToolId } from "./ToolId.ts";
import { inject, injectable } from "inversify";

@injectable()
export class ToolManager {
    private readonly toolRegistry: ToolRegistry;
    private selectedTool: Tool | undefined;

    constructor(@inject(ToolRegistry) toolRegistry: ToolRegistry) {
        this.toolRegistry = toolRegistry;
    }

    getSelectedTool(): Tool | undefined {
        return this.selectedTool;
    }

    selectTool(id: ToolId) {
        const newTool = this.toolRegistry.get(id);

        if(newTool !== undefined) {
            this.selectedTool = newTool;
        }
    }
}