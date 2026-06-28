import { RoomTile } from "./RoomTile.ts";

export class RoomTileset {
    name: string = "";
    walls: RoomTile[] = [];
    ceilings: RoomTile[] = [];
    floors: RoomTile[] = [];
}