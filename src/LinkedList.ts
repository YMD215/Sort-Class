import { Sort } from "./Sort";

export class Node {
    next: Node | null = null;
    constructor(public data: number){}
}

export class LinkedList extends Sort{
    head: Node | null = null;
    add(data: number){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(data);
    }

    get length(): number{
        if(!this.head) return 0;
        let counter = 1;
        let current = this.head;
        while(current!.next){
            counter++;
            current = current!.next;
        }
        return counter;
    }

    at(index: number): Node {
        if(index < 0 || index >= this.length || !this.head) throw new Error("index is out of range!!");
        let counter = 0;
        let current = this.head;
        while(counter < index){
            current = current!.next!;
            counter++;
        }
        return current;
    }
    
    compare(leftIndex: number , rightIndex: number){
        if(!this.head) throw new Error("List is empty!");
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number , rightIndex: number){
        let leftIndexNode = this.at(leftIndex); 
        let rightIndexNode = this.at(rightIndex);
        
        let lefHand = leftIndexNode.data;
        leftIndexNode.data = rightIndexNode.data;
        rightIndexNode.data = lefHand;
    }
    print(){
        if(!this.head) return;
        let current: Node | null = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}