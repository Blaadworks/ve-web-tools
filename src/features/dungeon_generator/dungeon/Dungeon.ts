import type { Vec2 } from "../../../math/Vec2.ts";
import { RoomTile } from "../rooms/RoomTile.ts";
import type { Room } from "../rooms/Room.ts";

export class Dungeon {
    private readonly tiles: Map<string, RoomTile> = new Map<string, RoomTile>();
    private readonly rooms: Map<string, Room> = new Map<string, Room>();

    getRooms(): Room[] {
        return Array.from(this.rooms.values());
    }

    getTileMap(): RoomTile[] {
        return Array.from(this.tiles.values())
    }

    setTile(pos: Vec2, tile: RoomTile) {
        const key = this.convertPosKey(pos);
        this.tiles.set(key, tile);
    }

    addRoom(room: Room) {
        const key = this.convertPosKey(room.pos);
        this.rooms.set(key, room);

        const left = room.pos.x;
        const right = left + room.size.x;
        const top = room.pos.y;
        const bottom = top - room.size.y;

        for(let x = left; x < right; x++) {
            const topRowPos = { x: x, y: top };
            const bottomRowPos = { x: x, y: bottom + 1 };
            const topTile = new RoomTile();
            const bottomTile = new RoomTile();

            topTile.pos = topRowPos;
            bottomTile.pos = bottomRowPos;

            this.setTile(topRowPos, topTile);
            this.setTile(bottomRowPos, bottomTile);
        }

        for(let y = top - 1; y > bottom + 1; y--) {
            const leftColumnPos = { x: left, y: y };
            const rightColumnPos = { x: right - 1, y: y };
            const leftTile = new RoomTile();
            const rightTile = new RoomTile();

            leftTile.pos = leftColumnPos;
            rightTile.pos = rightColumnPos;

            this.setTile(leftColumnPos, leftTile);
            this.setTile(rightColumnPos, rightTile);
        }
    }

    private convertPosKey(pos: Vec2): string {
        return `${pos.x}, ${pos.y}`
    }
}
