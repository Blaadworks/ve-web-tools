import type { CanvasRenderer } from "../../base/render/CanvasRenderer.ts";
import type { DungeonGrid } from "./DungeonGrid.ts";
import type { RoomTile } from "../rooms/RoomTile.ts";

export class DungeonGridRenderer implements CanvasRenderer {
    private readonly tileSize = 32;
    private readonly grid: DungeonGrid;

    constructor(grid: DungeonGrid) {
        this.grid = grid;
    }

    render(ctx: CanvasRenderingContext2D) {
        const width = ctx.canvas.clientWidth;
        const height = ctx.canvas.clientHeight;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#202020";
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);

        for(const tile of this.grid.getTileMap()) {
            this.renderTile(ctx, tile);
        }

        ctx.restore();
    }

    private renderTile(ctx: CanvasRenderingContext2D, tile: RoomTile) {
        const size = this.tileSize;
        const centerX = tile.pos.x * size;
        const centerY = tile.pos.y * size;
        const left = centerX - size / 2;
        const top = centerY - size / 2;

        ctx.fillStyle = "white";
        ctx.fillRect(left, top, size, size);

        ctx.strokeStyle = "#404040";
        ctx.strokeRect(left, top, size, size);
    }
}