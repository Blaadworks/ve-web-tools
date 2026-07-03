import type { CanvasRenderer } from "../../base/render/CanvasRenderer.ts";
import { DungeonViewModel } from "./DungeonViewModel.ts";
import { inject, injectable } from "inversify";
import { TileViewModel } from "./TileViewModel.ts";

@injectable()
export class DungeonRenderer implements CanvasRenderer {
    private readonly tileSize = 16;
    private readonly viewModel: DungeonViewModel;

    constructor(@inject(DungeonViewModel) dungeonViewModel: DungeonViewModel) {
        this.viewModel = dungeonViewModel;
    }

    render(ctx: CanvasRenderingContext2D) {
        const width = ctx.canvas.clientWidth;
        const height = ctx.canvas.clientHeight;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#202020";
        ctx.fillRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);

        for(const tile of this.viewModel.tiles) {
            this.renderTile(ctx, tile);
        }

        ctx.restore();
    }

    private renderTile(ctx: CanvasRenderingContext2D, tileViewModel: TileViewModel) {
        const size = this.tileSize;
        const centerX = tileViewModel.pos.x * size;
        const centerY = tileViewModel.pos.y * size;
        const left = centerX - size / 2;
        const top = centerY - size / 2;

        ctx.fillStyle = "white";
        ctx.fillRect(left, top, size, size);

        ctx.strokeStyle = "#404040";
        ctx.strokeRect(left, top, size, size);
    }
}
