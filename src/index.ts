import { CharactersCollection } from "./CharactersCollection";
import { Node, LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollection";
import { Sort } from "./Sort";

let collection = new NumberCollection([10, 9, 5, 3, 2, 1]);
collection.sort();
console.log(collection);

let stringCollection = new CharactersCollection("youssef");
stringCollection.sort();
console.log(stringCollection);

let LinkedListCollection = new LinkedList();
LinkedListCollection.add(-5);
LinkedListCollection.add(9);
LinkedListCollection.add(7);
LinkedListCollection.sort();
LinkedListCollection.print();

console.log("sec list");

let LinkedListCollection2 = new LinkedList();
LinkedListCollection2.add(5);
LinkedListCollection2.add(4);
LinkedListCollection2.add(2);
LinkedListCollection2.sort();
LinkedListCollection2.print();

let mergedList = new LinkedList();
mergedList.head = mergeTwoLists(LinkedListCollection.head, LinkedListCollection2.head);

console.log("merged list is:");
mergedList.print();

function mergeTwoLists(list1: Node | null, list2: Node | null): Node | null {
  let dummyNode = new Node(0);
  let current = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return dummyNode.next;
}
