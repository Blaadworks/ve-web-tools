import type * as React from "react";
import { Coordinates } from "../core/math/Coordinates";
import { MouseButton } from "./MouseButton";
import { ToolManager } from "../core/features/skill_graph/tools/ToolManager.ts";
import { CameraStore } from "../core/features/skill_graph/camera/CameraStore.ts";
import { PanController } from "./PanController.ts";
import { ZoomCommand } from "../commands/ZoomCommand.ts";
import { inject, injectable } from "inversify";
import { ZOOM_SENSITIVITY } from "../core/config/constants.ts";

@injectable()
export class InputHandler {
    private toolManager: ToolManager;
    private cameraStore: CameraStore;
    private pan: PanController;
    private zoomCommand: ZoomCommand;

    constructor(
        @inject(ToolManager) toolManager: ToolManager,
        @inject(CameraStore) cameraStore: CameraStore,
        @inject(PanController) pan: PanController,
        @inject(ZoomCommand) zoomCommand: ZoomCommand,
    ) {
        this.toolManager = toolManager;
        this.cameraStore = cameraStore;
        this.pan = pan;
        this.zoomCommand = zoomCommand;
    }

    onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const selectedTool = this.toolManager.getSelectedTool();

        switch(e.button) {
            case MouseButton.Left: {
                const mouseWorldPos = this.getMouseWorldPos(e);

                selectedTool?.onStartUsing(mouseWorldPos);
                break;
            }

            case MouseButton.Middle: {
                this.pan.onMouseDown(e);
                break;
            }

            case MouseButton.Right: {
                e.preventDefault();
                break;
            }
        }
    };

    onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const selectedTool = this.toolManager.getSelectedTool();
        const mouseWorldPos = this.getMouseWorldPos(e);

        selectedTool?.onMove(mouseWorldPos);
        this.pan.onMouseMove(e);
    };

    onMouseUp = () => {
        const selectedTool = this.toolManager.getSelectedTool();

        selectedTool?.onFinishUsing();
        this.pan.onMouseUp();
    };

    onWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
        this.zoomCommand.execute(e.deltaY * ZOOM_SENSITIVITY);
    };

    private getMouseWorldPos(e: React.MouseEvent<HTMLCanvasElement>) {
        const canvas = e.currentTarget;
        const rect = canvas.getBoundingClientRect();
        const camera = this.cameraStore.get();
        const mouseScreen = {
            x: (e.clientX - rect.left) * (canvas.width / rect.width),
            y: (e.clientY - rect.top) * (canvas.height / rect.height),
        };
        const mouseWorldPos = Coordinates.screenToWorld(mouseScreen, camera, canvas);

        return mouseWorldPos;
    }
}