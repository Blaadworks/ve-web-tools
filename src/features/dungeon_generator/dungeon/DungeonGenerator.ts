import { Dungeon } from "./Dungeon.ts";
import { Room } from "../rooms/Room.ts";
import { DungeonGeneratorConfig } from "./DungeonGeneratorConfig.ts";
import { RandomGenerator } from "../../../math/RandomGenerator.ts";
import { inject } from "inversify";

export class DungeonGenerator {
    config: DungeonGeneratorConfig;
    rng: RandomGenerator;

    constructor(
        @inject(DungeonGeneratorConfig) config: DungeonGeneratorConfig,
        @inject(RandomGenerator) rng: RandomGenerator
    ) {
        this.config = config;
        this.rng = rng;
    }

    generate(): Dungeon {
        const dungeon = new Dungeon();

        this.addRooms(dungeon);

        return dungeon;
    }

    private addRooms(dungeon: Dungeon) {
        for(let i = 0; i < this.config.roomCount; i++) {
            const room = this.createRoom(dungeon);
            dungeon.addRoom(room);
        }
    }

    private createRoom(dungeon: Dungeon): Room {
        let roomGenerationAttempt = 1;

        while(true) {
            if(roomGenerationAttempt == 50) {
                throw new Error("Room generation attempt limit reached.");
            }

            const posX = this.rng.nextIntInRange(0, this.config.dungeonSize) - this.config.dungeonSize / 2;
            const posY = this.rng.nextIntInRange(0, this.config.dungeonSize) - this.config.dungeonSize / 2;
            const width = this.rng.nextIntInRange(this.config.minRoomSize, this.config.maxRoomSize);
            const height = this.rng.nextIntInRange(this.config.minRoomSize, this.config.maxRoomSize);
            const room = new Room({ x: posX, y: posY }, { x: width, y: height });
            const roomCollides = this.roomCollidesWithOthers(room, dungeon);

            if(!roomCollides) {
                return room;
            }

            roomGenerationAttempt++;
        }
    }

    private roomCollidesWithOthers(room: Room, dungeon: Dungeon) {
        for(const existingRoom of dungeon.getRooms()) {
            const roomsCollide = this.roomsCollide(room, existingRoom);

            if(roomsCollide) {
                return true;
            }
        }

        return false;
    }

    private roomsCollide(room1: Room, room2: Room): boolean {
        const collideHorizontally = room1.getMinX() <= room2.getMaxX() && room1.getMaxX() >= room2.getMinX();
        const colliderVertically = room1.getMinY() <= room2.getMaxY() && room1.getMaxY() >= room2.getMinY();

        return collideHorizontally && colliderVertically;
    }
}
