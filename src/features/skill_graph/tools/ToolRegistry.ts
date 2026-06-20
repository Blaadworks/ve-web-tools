import type { Tool } from "./Tool.ts";
import type { ToolId } from "./ToolId.ts";
import { injectable } from "inversify";

@injectable()
export class ToolRegistry {
    private readonly tools = new Map<ToolId, Tool>();

    register(tool: Tool) {
        if(this.tools.has(tool.id)) {
            console.warn(`Duplicate tool registration with id "${tool.id}, instance will be overwritten"`);
        }

        this.tools.set(tool.id, tool);
    }

    get(id: ToolId): Tool | undefined {
        const tool = this.tools.get(id);

        if(tool === undefined) {
            console.warn(`Could not find tool with id "${id}"`)
        }

        return tool;
    }

    getAll(): Tool[] {
        return Array.from(this.tools.values());
    }
}