import type { Vec2 } from "../../../math/Vec2.ts";

export class Room {
    readonly pos: Vec2
    readonly size: Vec2
    private readonly connectedRooms: Set<Room> = new Set<Room>();

    constructor(pos: Vec2, size: Vec2) {
        this.pos = pos;
        this.size = size;
    }

    getMinX(): number {
        return this.pos.x;
    }

    getMaxX(): number {
        return this.pos.x + this.size.x;
    }

    getMinY(): number {
        return this.pos.y - this.size.y;
    }

    getMaxY(): number {
        return this.pos.y
    }

    getCenterPos(): Vec2 {
        return { x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2 };
    }

    connectRoom(room: Room) {
        this.connectedRooms.add(room);
    }

    getConnectedRooms(): ReadonlySet<Room> {
        return this.connectedRooms;
    }
}
