import { inject, injectable } from "inversify";
import { ZoomTool } from "../core/features/skill_graph/tools/ZoomTool.ts";
import { ZoomToolStore } from "../core/features/skill_graph/tools/ZoomToolStore.ts";
import type { Store } from "../core/adapters/Store.ts";

@injectable()
export class ZoomResetCommand {
    private readonly zoomTool: ZoomTool;

    public constructor(@inject(ZoomToolStore) zoomToolStore: Store<ZoomTool>) {
        this.zoomTool = zoomToolStore.get();
    }

    public execute() {
        this.zoomTool.resetZoom();
    }
}