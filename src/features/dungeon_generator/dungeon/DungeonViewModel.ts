import { inject, injectable } from "inversify";
import { TileViewModel } from "./TileViewModel.ts";
import type { Store } from "../../../adapters/Store.ts";
import type { Dungeon } from "./Dungeon.ts";
import { DungeonStore } from "./DungeonStore.ts";

@injectable()
export class DungeonViewModel {
    tiles: TileViewModel[] = [];

    constructor(@inject(DungeonStore) dungeonStore: Store<Dungeon>) {
        dungeonStore.subscribe((dungeon) => {this.sync(dungeon)})
    }

    private sync(dungeon: Dungeon) {
        this.tiles = dungeon.getTileMap().map((it) => new TileViewModel(it.pos))
    }
}
