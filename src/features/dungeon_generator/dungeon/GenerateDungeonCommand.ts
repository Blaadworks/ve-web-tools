import { inject, injectable } from "inversify";
import type { Store } from "../../../adapters/Store.ts";
import type { Dungeon } from "./Dungeon.ts";
import { DungeonViewModel } from "./DungeonViewModel.ts";
import { DungeonGenerator } from "./DungeonGenerator.ts";
import { DungeonStore } from "./DungeonStore.ts";
import { TileViewModel } from "./TileViewModel.ts";

@injectable()
export class GenerateDungeonCommand {
    private readonly dungeonStore: Store<Dungeon>;
    private readonly dungeonViewModel: DungeonViewModel;
    private readonly dungeonGenerator: DungeonGenerator;

    constructor(
        @inject(DungeonStore) dungeonStore: Store<Dungeon>,
        @inject(DungeonViewModel) dungeonViewModel: DungeonViewModel,
        @inject(DungeonGenerator) dungeonGenerator: DungeonGenerator
    ) {
        this.dungeonStore = dungeonStore;
        this.dungeonViewModel = dungeonViewModel;
        this.dungeonGenerator = dungeonGenerator;
    }

    execute() {
        const newDungeon = this.dungeonGenerator.generate();
        this.dungeonStore.set(newDungeon);

        this.dungeonViewModel.tiles = [];

        for(const tile of newDungeon.getTileMap()) {
            this.dungeonViewModel.tiles.push(new TileViewModel(tile.pos))
        }
    }
}
