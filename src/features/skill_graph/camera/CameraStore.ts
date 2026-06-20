import { Store } from "../../../adapters/Store.ts";
import { Camera } from "./Camera.ts";
import { injectable } from "inversify";

@injectable()
export class CameraStore extends Store<Camera> {
    constructor() {
        super(new Camera());
    }
}