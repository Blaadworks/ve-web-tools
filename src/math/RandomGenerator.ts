export class RandomGenerator {
    private number: number;

    constructor(seed: number) {
        this.number = seed;
    }

    /**
     *  Uses mulberry32. Generates a number in range [0; 1).
     */
    next(): number {
        let t = this.number += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);

        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }

    nextInRange(min: number, max: number): number {
        return this.next() * (max - min) + min;
    }

    nextIntInRange(min: number, max: number): number {
        return Math.floor(this.nextInRange(min, max + 1));
    }
}
