import { inject, injectable } from "inversify";
import { ZoomTool } from "../tools/ZoomTool.ts";
import { ZoomToolStore } from "../tools/ZoomToolStore.ts";
import type { Store } from "../../../adapters/Store.ts";

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