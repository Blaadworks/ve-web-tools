import { inject, injectable } from "inversify";
import { ZoomTool } from "../core/features/skill_graph/tools/ZoomTool.ts";
import { ZoomToolStore } from "../core/features/skill_graph/tools/ZoomToolStore.ts";
import type { Store } from "../core/adapters/Store.ts";

@injectable()
export class ZoomCommand {
    private readonly zoomTool: ZoomTool;

    public constructor(@inject(ZoomToolStore) zoomToolStore: Store<ZoomTool>) {
        this.zoomTool = zoomToolStore.get();
    }

    public execute(amount: number) {
        this.zoomTool.zoom(amount);
    }
}