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

        this.addRooms(dungeon);

        return dungeon;
    }

    private addRooms(dungeon: DungeonGrid) {
        for(let i = 0; i < this.config.roomCount; i++) {
            const posX = this.rng.nextIntInRange(0, this.config.dungeonSize);
            const posY = this.rng.nextIntInRange(0, this.config.dungeonSize);
            const width = this.rng.nextIntInRange(this.config.minRoomSize, this.config.maxRoomSize);
            const height = this.rng.nextIntInRange(this.config.minRoomSize, this.config.maxRoomSize);
            const room = new Room({ x: posX, y: posY }, { x: width, y: height });

            dungeon.addRoom(room);
        }
    }
}
