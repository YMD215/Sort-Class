import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollection";
import { Sort } from "./Sort";

let collection = new NumberCollection([10, 9 , 5, 3, 2, 1]);
collection.sort()
console.log(collection)

let stringCollection = new CharactersCollection('youssef');
stringCollection.sort()
console.log(stringCollection)

let LinkedListCollection = new LinkedList();
LinkedListCollection.add(-5)
LinkedListCollection.add(9)
LinkedListCollection.add(1)
LinkedListCollection.add(7)
LinkedListCollection.sort()
LinkedListCollection.print()