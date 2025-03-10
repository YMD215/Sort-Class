"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
const Sort_1 = require("./Sort");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList extends Sort_1.Sort {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
    }
    get length() {
        if (!this.head)
            return 0;
        let counter = 1;
        let current = this.head;
        while (current.next) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    at(index) {
        if (index < 0 || index >= this.length || !this.head)
            throw new Error("index is out of range!!");
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("List is empty!");
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        let leftIndexNode = this.at(leftIndex);
        let rightIndexNode = this.at(rightIndex);
        let lefHand = leftIndexNode.data;
        leftIndexNode.data = rightIndexNode.data;
        rightIndexNode.data = lefHand;
    }
    print() {
        if (!this.head)
            return;
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
// export class LinkedList {
//     head: Node | null = null;
//     add(data: number){
//         let node = new Node(data);
//         if(!this.head) this.head = node;
//         let tail = this.head!;
//         while(tail.next){
//             tail = tail.next
//         }
//         tail.next = node;
//     }
//     get length(){
//         let counter = 0;
//         let tail = this.head;
//         while(tail?.next){
//             counter++
//         }
//         return counter;
//     }
//     at(num: number){
//         if(num >= this.length || num < 0) throw new Error('the index is bigger that the List!!');
//         let counter = 0;
//         let tail = this.head;
//         while(counter < num){
//             counter++;
//             tail = tail!.next;
//         }
//         return tail!;
//     }
//     compare(firstIndex: number, SecIndex: number){
//         return this.at(firstIndex)?.data > this.at(SecIndex)?.data
//     }
// }
