import { inject, injectable } from "inversify";
import { TileViewModel } from "./TileViewModel.ts";
import type { Store } from "../../../adapters/Store.ts";
import type { Dungeon } from "./Dungeon.ts";
import { DungeonStore } from "./DungeonStore.ts";
import type { Vec2 } from "../../../math/Vec2.ts";

@injectable()
export class DungeonViewModel {
    tiles: TileViewModel[] = [];
    connectedRoomPositions: [Vec2, Vec2][] = [];

    constructor(@inject(DungeonStore) dungeonStore: Store<Dungeon>) {
        dungeonStore.subscribe((dungeon) => {
            this.sync(dungeon)
        })
    }

    private sync(dungeon: Dungeon) {
        this.tiles = dungeon.getTileMap().map((tile) => {
            const tileViewModel = new TileViewModel();
            tileViewModel.position = tile.pos;
            return tileViewModel;
        })

        this.connectedRoomPositions = [];

        for(const room of dungeon.getRooms()) {
            for(const connectedRoom of room.getConnectedRooms()) {
                this.connectedRoomPositions.push([room.getCenterPos(), connectedRoom.getCenterPos()]);
            }
        }
    }
}
