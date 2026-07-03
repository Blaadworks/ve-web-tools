import { expect, test } from "vitest";
import { Room } from "../src/features/dungeon_generator/rooms/Room";

test("New room | Position is initialized", () => {
    const position = { x: 1, y: 4 };
    const size = { x: 2, y: 2 };
    const room = new Room(position, size);

    expect(room.pos).toBe(position);
})

test("New room | Size is initialized", () => {
    const position = { x: 1, y: 4 };
    const size = { x: 2, y: 2 };
    const room = new Room(position, size);

    expect(room.size).toBe(size);
})

test("New room | No connected rooms", () => {
    const position = { x: 1, y: 4 };
    const size = { x: 2, y: 2 };
    const room = new Room(position, size);

    expect(room.getConnectedRooms().size).toBe(0);
})

test("Get center position | Calculation is correct", () => {
    const position = { x: 0, y: 0 };
    const size = { x: 3, y: 4 };
    const room = new Room(position, size);

    const actual = room.getCenterPos();
    const expected = { x: 1.5, y: -2 };

    expect(actual.x).toBe(expected.x);
    expect(actual.y).toBe(expected.y);
})
