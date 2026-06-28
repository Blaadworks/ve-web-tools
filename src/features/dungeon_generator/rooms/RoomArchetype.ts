import { RoomTileset } from "./RoomTileset.ts";

export class RoomArchetype {
    readonly name: string;
    readonly tileset: RoomTileset;

    constructor(name: string, tileset: RoomTileset) {
        this.name = name;
        this.tileset = tileset;
    }
}