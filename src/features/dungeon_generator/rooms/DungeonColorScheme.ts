import type { BlockPalette } from "./BlockPalette.ts";

export class DungeonColorScheme {
    woodType: string = "";
    walls: BlockPalette | null = null;
    floor: BlockPalette | null = null;
}