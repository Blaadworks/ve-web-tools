import { ZoomTool } from "../tools/ZoomTool.ts";
import { inject, injectable } from "inversify";
import type { Store } from "../../../adapters/Store.ts";
import { ZoomToolStore } from "../tools/ZoomToolStore.ts";

@injectable()
export class ZoomInCommand {
    private readonly zoomTool: ZoomTool;

    public constructor(@inject(ZoomToolStore) zoomToolStore: Store<ZoomTool>) {
        this.zoomTool = zoomToolStore.get();
    }

    public execute() {
        this.zoomTool.zoomIn();
    }
}