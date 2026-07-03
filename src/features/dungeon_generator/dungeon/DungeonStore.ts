import { Store } from "../../../adapters/Store.ts";
import { Dungeon } from "./Dungeon.ts";
import { injectable } from "inversify";

@injectable()
export class DungeonStore extends Store<Dungeon> {
    constructor() {
        super(new Dungeon());
    }
}
