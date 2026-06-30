import { DungeonGrid } from "../render/DungeonGrid.ts";
import { Room } from "../rooms/Room.ts";
import { DungeonGeneratorConfig } from "./DungeonGeneratorConfig.ts";
import type { RandomGenerator } from "../../../math/RandomGenerator.ts";

export class DungeonGenerator {
    config: DungeonGeneratorConfig;
    rng: RandomGenerator;

    constructor(config: DungeonGeneratorConfig, rng: RandomGenerator) {
        this.config = config;
        this.rng = rng;
    }

    generate(): DungeonGrid {
        const dungeon = new DungeonGrid();
        const room = new Room({ x: 0, y: 0 }, { x: 4, y: 6 });

        this.addRooms(dungeon);
        dungeon.addRoom(room)

        return dungeon;
    }

    private addRooms(dungeon: DungeonGrid) {
        const room1 = new Room({ x: 0, y: 0 }, { x: 4, y: 6 });
        const room2 = new Room({ x: 0, y: 8 }, { x: 4, y: 6 });

        dungeon.addRoom(room1);
        dungeon.addRoom(room2);
    }
}
