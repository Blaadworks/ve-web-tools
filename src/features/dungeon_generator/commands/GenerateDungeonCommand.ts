import { inject, injectable } from "inversify";
import type { Store } from "../../../adapters/Store.ts";
import type { Dungeon } from "../dungeon/Dungeon.ts";
import { DungeonGenerator } from "../dungeon/DungeonGenerator.ts";
import { DungeonStore } from "../dungeon/DungeonStore.ts";

@injectable()
export class GenerateDungeonCommand {
    private readonly dungeonStore: Store<Dungeon>;
    private readonly dungeonGenerator: DungeonGenerator;

    constructor(
        @inject(DungeonStore) dungeonStore: Store<Dungeon>,
        @inject(DungeonGenerator) dungeonGenerator: DungeonGenerator
    ) {
        this.dungeonStore = dungeonStore;
        this.dungeonGenerator = dungeonGenerator;
    }

    execute() {
        const newDungeon = this.dungeonGenerator.generate();
        this.dungeonStore.set(newDungeon);
    }
}
