import type { CanvasRenderer } from "../../base/render/CanvasRenderer.ts";
import type { Vec2 } from "../../../math/Vec2.ts";
import type { Grid } from "./Grid.ts";

export interface Tile {
    pos: Vec2,
    color: string;
}

export class DungeonGeneratorRenderer implements CanvasRenderer {
    private readonly tileSize = 16;
    private readonly grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    render(ctx: CanvasRenderingContext2D) {
        const width = ctx.canvas.clientWidth;
        const height = ctx.canvas.clientHeight;

        ctx.clearRect(0, 0, width, height);

        // Фон
        ctx.fillStyle = "#202020";
        ctx.fillRect(0, 0, width, height);

        // Начало координат мира в центре экрана
        ctx.save();
        ctx.translate(width / 2, height / 2);

        for(const tile of this.grid.tiles) {
            this.renderTile(ctx, tile);
        }

        ctx.restore();
    }

    private renderTile(
        ctx: CanvasRenderingContext2D,
        tile: Tile
    ) {
        const size = this.tileSize;

        // Координаты центра тайла в мире
        const centerX = tile.pos.x * size;
        const centerY = tile.pos.y * size;

        // Pivot тайла в центре
        const left = centerX - size / 2;
        const top = centerY - size / 2;

        ctx.fillStyle = tile.color;
        ctx.fillRect(left, top, size, size);

        // Для отладки можно рисовать границы
        ctx.strokeStyle = "#404040";
        ctx.strokeRect(left, top, size, size);
    }
}