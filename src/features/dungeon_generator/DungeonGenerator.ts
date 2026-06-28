import { DungeonGrid } from "./render/DungeonGrid.ts";
import { Room } from "./rooms/Room.ts";

export class DungeonGenerator {
    generate(): DungeonGrid {
        const dungeon = new DungeonGrid();
        const room = new Room({ x: 0, y: 0 }, { x: 4, y: 6 });

        dungeon.addRoom(room)

        return dungeon;
    }
}