import { Store } from "../../../adapters/Store.ts";
import { ZoomTool } from "./ZoomTool.ts";
import { injectable, inject } from "inversify";
import { CameraStore } from "../camera/CameraStore.ts";

@injectable()
export class ZoomToolStore extends Store<ZoomTool> {
    constructor(@inject(CameraStore) cameraStore: CameraStore) {
        super(new ZoomTool(cameraStore));
    }
}