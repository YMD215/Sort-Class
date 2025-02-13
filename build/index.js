"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
let collection = new NumbersCollection_1.NumberCollection([10, 9, 5, 3, 2, 1]);
collection.sort();
console.log(collection);
let stringCollection = new CharactersCollection_1.CharactersCollection("youssef");
stringCollection.sort();
console.log(stringCollection);
let LinkedListCollection = new LinkedList_1.LinkedList();
LinkedListCollection.add(-5);
LinkedListCollection.add(9);
LinkedListCollection.add(7);
LinkedListCollection.sort();
LinkedListCollection.print();
console.log("sec list");
let LinkedListCollection2 = new LinkedList_1.LinkedList();
LinkedListCollection2.add(5);
LinkedListCollection2.add(4);
LinkedListCollection2.add(2);
LinkedListCollection2.sort();
LinkedListCollection2.print();
let mergedList = new LinkedList_1.LinkedList();
mergedList.head = mergeTwoLists(LinkedListCollection.head, LinkedListCollection2.head);
console.log("merged list is:");
mergedList.print();
function mergeTwoLists(list1, list2) {
    let dummyNode = new LinkedList_1.Node(0);
    let current = dummyNode;
    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    }
    else if (list2 !== null) {
        current.next = list2;
    }
    return dummyNode.next;
}
