import { injectable } from "inversify";
import { TileViewModel } from "./TileViewModel.ts";

@injectable()
export class DungeonViewModel {
    tiles: TileViewModel[] = [];
}
