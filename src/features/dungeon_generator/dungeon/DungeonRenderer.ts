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

        ctx.strokeStyle = "red";

        for(const [pos1, pos2] of this.viewModel.connectedRoomPositions) {
            ctx.beginPath();
            ctx.moveTo(pos1.x * this.tileSize, pos1.y * this.tileSize);
            ctx.lineTo(pos2.x * this.tileSize, pos2.y * this.tileSize);
            ctx.stroke();
        }

        ctx.restore();
    }

    private renderTile(ctx: CanvasRenderingContext2D, tileViewModel: TileViewModel) {
        const centerX = tileViewModel.position.x * this.tileSize;
        const centerY = tileViewModel.position.y * this.tileSize;
        const left = centerX - this.tileSize / 2;
        const top = centerY - this.tileSize / 2;

        ctx.fillStyle = "white";
        ctx.fillRect(left, top, this.tileSize, this.tileSize);

        ctx.strokeStyle = "#404040";
        ctx.strokeRect(left, top, this.tileSize, this.tileSize);
    }
}
