import { Sort } from "./Sort";

export class CharactersCollection extends Sort {
    constructor(public data: string) {
        super()
    }

    get length(): number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}